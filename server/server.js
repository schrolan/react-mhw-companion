const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const typeDefs = require('./schemas/typeDefs');
const resolvers = require('./schemas/resolvers');
const { authMiddleware } = require('./utils/auth');
const cors = require('cors');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use((req, res, next) => {
  req.headers['Content-Length'] = 10000;
  next();
});

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '..', 'client', 'build')));
}

app.use(cors({ origin: '*', credentials: true }));

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://root:root@cluster0.5jsp7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(async () => {
    const apolloServer = new ApolloServer({ typeDefs, resolvers });
    await apolloServer.start();

    app.use('/graphql', expressMiddleware(apolloServer, {
      context: authMiddleware,
    }));

    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
    });

    app.listen(PORT, () => {
      console.log(`Express server listening on http://localhost:${PORT}`);
      console.log(`Apollo GraphQL playground available at http://localhost:${PORT}/graphql`);
    });
})
.catch(err => {
    console.error('MongoDB connection error:', err);
});