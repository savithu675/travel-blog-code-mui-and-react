import React, { useState, useRef } from 'react';
import { AppBar, Link, Container, Toolbar, Typography, Button, Grid, Card, CardContent, CardActions, Divider, Switch, FormControlLabel } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.css';
import { IconButton } from '@mui/material';


const theme = createTheme({
  palette: {
    mode: 'light',
  },
  typography: {
    fontFamily: ['Arial', 'sans-serif'].join(','),
    h6: {
      fontWeight: 'bold',
      fontStyle: 'italic',
      background: 'linear-gradient(to right, #FFA500, #800080)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
  },
});

const blogPosts = [
  {
    id: 1,
    title: 'Fun Times at Bali Beaches',
    content: 'I had a blast exploring the beautiful beaches of Bali. The sand was soft, the water was clear, and the sunsets were amazing!',
    fullContent: 'During my trip to Bali, I spent most of my time relaxing on the beach, swimming in the ocean, and watching the sunset. It was a truly magical experience that I\'ll never forget.',
  },
  {
    id: 2,
    title: 'Adventures in the Himalayas',
    content: 'Trekking in the Himalayas was an incredible adventure. The mountains were stunning, the air was fresh, and the people were friendly.',
    fullContent: 'I spent several days trekking through the Himalayas, enjoying the breathtaking views and challenging myself physically. It was tough at times, but the experience was totally worth it!',
  },
  {
    id: 3,
    title: 'Eating my Way Through Italy',
    content: 'I indulged in some delicious Italian food during my trip. The pasta was tasty, the pizza was cheesy, and the gelato was heavenly!',
    fullContent: 'One of the highlights of my trip to Italy was trying all the delicious food. I visited local markets, tried different dishes, and even took a cooking class. It was a culinary adventure I\'ll never forget!',
  },
  {
    id: 4,
    title: 'Discovering Ancient Athens',
    content: 'I explored the historic city of Athens and learned about its fascinating past. The architecture was impressive, the stories were captivating, and the atmosphere was unforgettable!',
    fullContent: 'Athens is filled with ancient ruins and monuments that tell the story of its rich history. From the Acropolis to the Agora, there was so much to see and learn about. It was an amazing experience that left me in awe of the city and its heritage.',
  },
  {
    id: 5,
    title: 'Angkor Wat: A Marvel of Architecture',
    content: 'Visiting Angkor Wat was like stepping into a different world. The temples were magnificent, the carvings were intricate, and the atmosphere was serene.',
    fullContent: 'Angkor Wat is one of the most incredible architectural wonders I\'ve ever seen. The temples are so well-preserved, and each one tells its own unique story. Exploring the site was a truly magical experience that I\'ll never forget.',
  },
  {
    id: 6,
    title: 'Wildlife Encounters in the Serengeti',
    content: 'Going on safari in the Serengeti was a dream come true. The animals were amazing, the landscapes were breathtaking, and the experience was unforgettable!',
    fullContent: 'The Serengeti is home to some of the most incredible wildlife on the planet. From lions to elephants to zebras, I saw it all! It was an adventure I\'ll never forget, and I feel so lucky to have experienced it.',
  },
];


function App() {
  const [mode, setMode] = useState('light');
  const [expandedBlog, setExpandedBlog] = useState(null);
  const [blogLoaded, setBlogLoaded] = useState(false);

  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleModeChange = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    document.documentElement.setAttribute('data-theme', newMode);
  };

  const handleReadMore = (blogId) => {
    if (expandedBlog === blogId) {
      setExpandedBlog(null); 
    } else {
      setExpandedBlog(blogId);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={`app ${mode}`}>
        <AppBar position="static" sx={{ background: 'linear-gradient(to right, #ADD8E6, #006400)' }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Travel Blog
            </Typography>
            <FormControlLabel
              control={<Switch checked={mode === 'dark'} onChange={handleModeChange} />}
              label={mode === 'dark' ? 'Dark Mode' : 'Light Mode'}
            />
          </Toolbar>
        </AppBar>
        <Container sx={{ py: 4 }}>
          <Grid container spacing={4} style={{ animation: blogLoaded ? 'slide-in 0.5s ease-out forwards' : 'none' }}>
            {blogPosts.map(blog => (
              <Grid item key={blog.id} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: '100%',
                    transition: 'transform 0.2s ease-in-out',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                  }}
                >
                  <CardContent>
                    <Typography variant="h5" component="div" gutterBottom>
                      {blog.title}
                    </Typography>
                    {expandedBlog === blog.id ? (
                      <Typography variant="body2" color="text.secondary">
                        {blog.fullContent}
                      </Typography>
                    ) : (
                      <Typography variant="body2" color="text.secondary">
                        {blog.content}
                      </Typography>
                    )}
                  </CardContent>
                  <CardActions>
                    <Button size="small" onClick={() => handleReadMore(blog.id)}>
                      {expandedBlog === blog.id ? 'Close' : 'Read More'}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Divider sx={{ my: 4 }} />
          <Typography variant="h4" gutterBottom ref={aboutRef}>
            About Us
          </Typography>
          <Typography variant="body1" paragraph>
           this is a bits project that i made.
          </Typography>
          <Divider sx={{ my: 4 }} />
          <Typography variant="h4" gutterBottom ref={contactRef}>
            Contact Us
          </Typography>
          <Grid container spacing={2}>
            {[1, 2, 3].map(index => (
              <Grid item xs={12} md={4} key={index}>
                <Card
                  sx={{
                    maxWidth: 300,
                    transition: 'transform 0.2s ease-in-out',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                  }}
                >
                  <CardContent>
                    <Typography variant="h5" component="div" gutterBottom>
                      Contact Information
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Email: savithu@gmail{index}.com
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <IconButton aria-label="email">
                      <MailIcon />
                    </IconButton>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'lightblue', padding: '20px 0', textAlign: 'center' }}>
      <Typography variant="body1" color="textPrimary">
        © 2024 Travel Blog. All rights reserved.
      </Typography>
      <Typography variant="body2" color="textSecondary">
        Made with ❤️ by savithu lokugama.
      </Typography>
    </footer>
  );
};

export default App;