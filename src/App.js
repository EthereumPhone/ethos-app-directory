import * as React from 'react';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import apps from './apps_dir.json';


function App() {
  const handleInstall = (apk_url) => {
    window.location.href = apk_url;
  }
  return (
    <div>
      <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" 
              component="div" sx={{ flexGrow: 1 }}>
              ethOS App Directory
            </Typography>
          </Toolbar>
        </AppBar>
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', p: 2 }}>
        {apps.map(app => (
          <Box sx={{ minWidth: 275 }}>
            <Card sx={{ minWidth: 275 }}>
              <Box sx={{ position: 'relative' }}>
                <img src={app.image_url} alt={app.name} style={{ width: '80px', position: 'absolute', top: '0', right: '0' }} />
              </Box>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  App
                </Typography>
                <Typography variant="h5" component="div">
                  {app.name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Description
                </Typography>
                <Typography variant="body2">
                  {app.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button onClick={() => handleInstall(app.apk_url)} size="small">Install</Button>
              </CardActions>
            </Card>
          </Box>
        ))}
      </Box>
    </div>
  );
}

export default App;
