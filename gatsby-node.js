

const fs = require('fs');
const { resolve } = require('path');
const { get } = require('https');

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /locomotive-scroll/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}

exports.createPages = async ({
  graphql,
  actions: { createPage, createRedirect },
}) => {


  const { data: { allDatoCmsPageHome: { nodes } } } = await graphql(`
  query {
    allDatoCmsPageHome {
      nodes {
        rok
        isActual
        id
      }
    }
  }
`);

  nodes.forEach(({ id, rok, isActual }) => {
    if (isActual) {
      createRedirect({
        fromPath: '/',
        toPath: '/' + rok,
        statusCode: 302,
        isPermanent: false,
        redirectInBrowser: true,
      })
    }

    createPage({
      path: rok,
      component: resolve('src/templates/homepage.jsx'),
      context: {
        id
      },
    });
  });
}