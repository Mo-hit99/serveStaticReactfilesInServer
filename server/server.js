import express  from 'express'
import path  from 'path'
import cors from 'cors'
const app = express();
const port = 3000;

const dirname = path.dirname(import.meta.dirname)

app.use(cors())
app.get('/api/v1',(req,res)=>{
    res.status(200).json({message:"nice work"})
})
// Serve React app
app.use(express.static(path.join(dirname, 'client/dist')));

// Handle all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(dirname, 'client/dist/index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
