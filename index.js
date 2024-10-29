// // // const express = require('express');
// // // var cors = require('cors')
// // // const app = express();
// // // const dotenv = require('dotenv');
// // // const mongoose = require('mongoose');

// // // dotenv.config();
// // // app.use(cors());
// // // mongoose.connect(process.env.DB_CONNECT,
// // // {useNewUrlParser:true},
// // // ()=>console.log('Connected to db'))

// // // const authRoute=require('./routes/auth');
// // // const rankRoute=require('./routes/rank');
// // // app.use(express.json());

// // // app.use('/api/user',authRoute);
// // // app.use('/api/rank',rankRoute);
// // // app.listen(process.env.PORT,()=>console.log('Up and Running'));
// // // // app.listen(5000, ()=>console.log('Up and Running'));






// // // const express = require('express');
// // // const cors = require('cors');
// // // const app = express();
// // // const dotenv = require('dotenv');
// // // const mongoose = require('mongoose');

// // // // Load environment variables from .env file
// // // dotenv.config();

// // // // Enable CORS for cross-origin requests
// // // app.use(cors());

// // // // Connect to MongoDB using the connection string from .env
// // // mongoose.connect(
// // //   process.env.DB_CONNECT,
// // //   { useNewUrlParser: true, useUnifiedTopology: true },
// // //   () => console.log('Connected to db')
// // // );

// // // // Import routes
// // // const authRoute = require('./routes/auth');
// // // const rankRoute = require('./routes/rank');

// // // // Middleware to parse JSON
// // // app.use(express.json());

// // // // Route middlewares
// // // app.use('/api/user', authRoute);
// // // app.use('/api/rank', rankRoute);

// // // // Start the server
// // // app.listen(process.env.PORT, () => console.log('Up and Running'));





// // const express = require('express');
// // const cors = require('cors');
// // const app = express();
// // const dotenv = require('dotenv');
// // const mongoose = require('mongoose');

// // const { ClarifaiStub, grpc } = require("clarifai-nodejs-grpc");
// // const stub = ClarifaiStub.grpc();

// // // Load environment variables from .env file
// // dotenv.config();

// // // Enable CORS for cross-origin requests
// // app.use(cors());

// // // Connect to MongoDB using async/await
// // async function connectDB() {
// //   try {
// //     // await mongoose.connect(process.env.DB_CONNECT, {
// //     //   useNewUrlParser: true,
// //     //   useUnifiedTopology: true,
// //     // });
// //     await mongoose.connect(process.env.DB_CONNECT);
// //     console.log('Connected to db');
// //   } catch (err) {
// //     console.error('Failed to connect to MongoDB', err);
// //     process.exit(1); // Exit process if connection fails
// //   }
// // }

// // connectDB();

// // // Import routes
// // const authRoute = require('./routes/auth');
// // const rankRoute = require('./routes/rank');

// // // Middleware to parse JSON
// // app.use(express.json());

// // const USER_ID = 'clarifai'; // Your user ID
// // const PAT = '5ddf166e361d4abd9c7e275537b2db43'; // Your Personal Access Token
// // const APP_ID = 'main'; // Your app ID
// // const WORKFLOW_ID = 'Demographics'; // Your workflow ID
// // const IMAGE_URL = 'https://samples.clarifai.com/metro-north.jpg'; // Your image URL

// // const metadata = new grpc.Metadata();
// // metadata.set("authorization", "Key " + PAT);

// // stub.PostWorkflowResults(
// //   {
// //       user_app_id: {
// //           "user_id": USER_ID,
// //           "app_id": APP_ID
// //       },
// //       workflow_id: WORKFLOW_ID,
// //       inputs: [
// //           { data: { image: { url: IMAGE_URL } } }
// //       ]
// //   },
// //   metadata,
// //   (err, response) => {
// //       if (err) {
// //           throw new Error(err);
// //       }

// //       if (response.status.code !== 10000) {
// //           throw new Error("Post workflow results failed, status: " + response.status.description);
// //       }

// //       // We'll get one WorkflowResult for each input we used above. Because of one input, we have here
// //       // one WorkflowResult.
// //       const results = response.results[0];

// //       // Each model we have in the workflow will produce one output.
// //       for (const output of results.outputs) {
// //           const model = output.model;

// //           console.log("Predicted concepts for the model `" + model.id + "`:");
// //           for (const concept of output.data.concepts) {
// //               console.log("\t" + concept.name + " " + concept.value);
// //           }
// //       }
// //   }
// // );
// // // Clarifai credentials
// // // const PAT = '5ddf166e361d4abd9c7e275537b2db43';
// // // const USER_ID = 'clarifai';
// // // const APP_ID = 'main';
// // // const MODEL_ID = 'ethnicity-demographics-recognition';
// // // const MODEL_VERSION_ID = 'b2897edbda314615856039fb0c489796';


// // // const metadata = new grpc.Metadata();
// // // metadata.set("authorization", "Key " + PAT);

// // // // Route to handle requests from the frontend
// // // app.post('/clarifai', (req, res) => {
// // //   const { imageUrl } = req.body; // Image URL sent from the frontend

// // //   stub.PostModelOutputs(
// // //       {
// // //           user_app_id: {
// // //               "user_id": USER_ID,
// // //               "app_id": APP_ID
// // //           },
// // //           model_id: MODEL_ID,
// // //           version_id: MODEL_VERSION_ID,
// // //           inputs: [
// // //               { data: { image: { url: imageUrl, allow_duplicate_url: true } } }
// // //           ]
// // //       },
// // //       metadata,
// // //       (err, response) => {
// // //           if (err) {
// // //               console.error("Error:", err);
// // //               return res.status(500).json({ error: "Failed to communicate with Clarifai." });
// // //           }

// // //           if (response.status.code !== 10000) {
// // //               console.error("Clarifai API error:", response.status.description);
// // //               return res.status(400).json({ error: "Clarifai API request failed." });
// // //           }

// // //           const output = response.outputs[0];
// // //           const predictions = output.data.concepts.map(concept => ({
// // //               name: concept.name,
// // //               value: concept.value
// // //           }));

// // //           console.log("Predicted concepts:", predictions);
// // //           res.json({ predictions });
// // //       }
// // //   );
// // // });

// // // Route middlewares
// // app.use('/api/user', authRoute);
// // app.use('/api/rank', rankRoute);

// // // Start the server
// // app.listen(process.env.PORT, () => console.log('Up and Running'));


// const express = require('express');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const mongoose = require('mongoose');
// const { ClarifaiStub, grpc } = require("clarifai-nodejs-grpc");

// const app = express();

// // Load environment variables from .env file
// dotenv.config();

// // Enable CORS for cross-origin requests
// app.use(cors());

// // Middleware to parse JSON
// app.use(express.json());

// // Connect to MongoDB using async/await
// async function connectDB() {
//     try {
//         await mongoose.connect(process.env.DB_CONNECT, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log('Connected to db');
//     } catch (err) {
//         console.error('Failed to connect to MongoDB', err);
//         process.exit(1); // Exit process if connection fails
//     }
// }

// connectDB();

// // Import routes
// const authRoute = require('./routes/auth');
// const rankRoute = require('./routes/rank');

// // Clarifai credentials
// const USER_ID = 'clarifai'; // Your user ID
// // const PAT = process.env.CLARIFAI_PAT; // Your Personal Access Token
// // const APP_ID = 'main'; // Your app ID
// // const WORKFLOW_ID = 'Demographics'; // Your workflow ID
// // const USER_ID = 'clarifai';
// // Your PAT (Personal Access Token) can be found in the Account's Security section
// const PAT = '5ddf166e361d4abd9c7e275537b2db43';
// const APP_ID = 'main';
// // Change these to make your own predictions
// const WORKFLOW_ID = 'Demographics';
// // const IMAGE_URL = 'https://samples.clarifai.com/metro-north.jpg';

// const stub = ClarifaiStub.grpc();
// const metadata = new grpc.Metadata();
// metadata.set("authorization", "Key " + PAT);

// // Route to handle requests from the frontend
// app.post('/clarifai', async (req, res) => {
//   console.log(req.body);
//   const { imageUrl } = req.body; // Image URL sent from the frontend

//   if (!imageUrl) {
//       return res.status(400).json({ error: "Image URL is required." });
//   }

//   try {
//       // Using Promises to handle the gRPC call
//       stub.PostWorkflowResults(
//           {
//               user_app_id: {
//                   user_id: USER_ID,
//                   app_id: APP_ID,
//               },
//               workflow_id: WORKFLOW_ID,
//               // model_id: 'face-detection', // Specify the model directly
//               inputs: [{ data: { image: { url: imageUrl } } }],
//           },
//           metadata,
//           (err, response) => {
//               if (err) {
//                   console.error("gRPC Error:", err);
//                   return res.status(500).json({ error: "Failed to communicate with Clarifai." });
//               }

//               if (response.status.code !== 10000) {
//                   console.error("Post workflow results failed:", response.status.description);
//                   return res.status(500).json({ error: "Post workflow results failed, status: " + response.status.description });
//               }

//               // Process the results
//               const results = response.results[0];
//               if (!results) {
//                   return res.status(500).json({ error: "No results found." });
//               }

//               const predictions = results.outputs.map(output => {
//                   const model = output.model;

//                   // Check if output.data and output.data.concepts are valid
//                   if (!output.data || !output.data.concepts) {
//                       console.error(`No concepts found for model: ${model.id}`);
//                       return { model: model.id, concepts: [] }; // Return empty if no concepts
//                   }

//                   return {
//                       model: model.id,
//                       concepts: output.data.concepts.map(concept => ({
//                           name: concept.name,
//                           value: concept.value,
//                       })),
//                   };
//               });

//               res.json({ predictions });
//           }
//       );
//   } catch (error) {
//       console.error("Error:", error);
//       res.status(500).json({ error: "Failed to communicate with Clarifai." });
//   }
// });




// // app.post('/clarifai', async (req, res) => {
// //   console.log(req.body);
// //     const { imageUrl } = req.body; // Image URL sent from the frontend

// //     if (!imageUrl) {
// //         return res.status(400).json({ error: "Image URL is required." });
// //     }

// //     try {
// //       const response = await stub.PostWorkflowResults(
// //         {
// //             user_app_id: {
// //                 "user_id": USER_ID,
// //                 "app_id": APP_ID
// //             },
// //             workflow_id: WORKFLOW_ID,
// //             inputs: [
// //                 // { data: { image: { url: IMAGE_URL } } }
// //                 { data: { image: { url: imageUrl } } }
// //             ]
// //         },
// //         metadata,
// //         (err, response) => {
// //             if (err) {
// //                 throw new Error(err);
// //             }
    
// //             if (response.status.code !== 10000) {
// //                 throw new Error("Post workflow results failed, status: " + response.status.description);
// //             }
    
// //             // We'll get one WorkflowResult for each input we used above. Because of one input, we have here
// //             // one WorkflowResult.
// //             const results = response.results[0];
    
// //             // Each model we have in the workflow will produce one output.
// //             for (const output of results.outputs) {
// //                 const model = output.model;
    
// //                 console.log("Predicted concepts for the model `" + model.id + "`:");
// //                 for (const concept of output.data.concepts) {
// //                     console.log("\t" + concept.name + " " + concept.value);
// //                 }
// //             }
// //         }
// //     );
    
// //         // const response = await stub.PostWorkflowResults(
// //         //     {
// //         //         user_app_id: {
// //         //             "user_id": USER_ID,
// //         //             "app_id": APP_ID
// //         //         },
// //         //         workflow_id: WORKFLOW_ID,
// //         //         inputs: [
// //         //             { data: { image: { url: imageUrl } } }
// //         //         ]
// //         //     },
// //         //     metadata
// //         // );

// //         // if (response.status.code !== 10000) {
// //         //     throw new Error("Post workflow results failed, status: " + response.status.description);
// //         // }

// //         // // Process the results
// //         // const results = response.results[0];
// //         // const predictions = results.outputs.map(output => ({
// //         //     model: output.model.id,
// //         //     concepts: output.data.concepts.map(concept => ({
// //         //         name: concept.name,
// //         //         value: concept.value
// //         //     }))
// //         // }));

// //         res.json({ predictions });
// //     } catch (error) {
// //         console.error("Error:", error);
// //         res.status(500).json({ error: "Failed to communicate with Clarifai." });
// //     }
// // });

// // Route middlewares
// app.use('/api/user', authRoute);
// app.use('/api/rank', rankRoute);

// // Start the server
// const PORT = process.env.PORT || 5000; // Fallback to port 5000 if not defined
// app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));




const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const { ClarifaiStub, grpc } = require("clarifai-nodejs-grpc");
const stringify = require('json-stringify-safe'); // Safe JSON stringify

const app = express();
dotenv.config(); // Load environment variables from .env

// Enable CORS and JSON parsing
app.use(cors());
// app.use(cors({ origin: 'http://localhost:3000' })); 
app.use(express.json());

// MongoDB connection
async function connectDB() {
    try {
        await mongoose.connect(process.env.DB_CONNECT, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('MongoDB connection failed', err);
        process.exit(1); // Exit if the connection fails
    }
}

connectDB();

// Import route middlewares
const authRoute = require('./routes/auth');
const rankRoute = require('./routes/rank');
app.use('/api/user', authRoute);
app.use('/api/rank', rankRoute);

// Clarifai API configuration
const USER_ID = 'clarifai';
const PAT = process.env.CLARIFAI_PAT; // Using env variable or fallback
const APP_ID = 'main';
const WORKFLOW_ID = 'Demographics';

const stub = ClarifaiStub.grpc();
const metadata = new grpc.Metadata();
metadata.set("authorization", `Key ${PAT}`);


// Demographics endpoint to handle Clarifai API calls
// app.post('/clarifai', (req, res) => {
//     const { imageUrl } = req.body;

//     if (!imageUrl) {
//         return res.status(400).json({ error: "Image URL is required." });
//     }

//     stub.PostWorkflowResults(
//         {
//             user_app_id: { user_id: USER_ID, app_id: APP_ID },
//             workflow_id: WORKFLOW_ID,
//             inputs: [{ data: { image: { url: imageUrl } } }]
//         },
//         metadata,
//         (err, response) => {
//             if (err || response.status.code !== 10000) {
//                 console.error("Clarifai API call error:", err || response.status.description);
//                 return res.status(500).json({ error: "Clarifai API call failed." });
//             }

//             // Check if the response has the expected structure
//             const regions = response.results[0]?.outputs?.[0]?.data?.regions;
//             if (!regions) {
//                 return res.status(404).json({ message: "No regions found." });
//             }

//             // Safely stringify and parse data before sending to frontend
//             const data = JSON.parse(stringify(regions));
//             res.json({ predictions: data });
//         }
//     );
// });







// Demographics endpoint to handle Clarifai API calls
app.post('/clarifai', (req, res) => {
    const { imageUrl } = req.body;

    if (!imageUrl) {
        return res.status(400).json({ error: "Image URL is required." });
    }

    stub.PostWorkflowResults(
        {
            user_app_id: { user_id: USER_ID, app_id: APP_ID },
            workflow_id: WORKFLOW_ID,
            inputs: [{ data: { image: { url: imageUrl } } }]
        },
        metadata,
        (err, response) => {
            if (err || response.status.code !== 10000) {
                console.error("Clarifai API call error:", err || response.status.description);
                return res.status(500).json({ error: "Clarifai API call failed." });
            }

            // Processing and sending response back to the frontend
            const data = stringify(response.results[0].outputs[4]?.data?.regions, null, 2); // Safely stringify
            res.json(data ? { predictions: JSON.parse(data) } : { message: "No regions found." });
        }
    );
});


// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
