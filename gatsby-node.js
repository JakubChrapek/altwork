

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
  actions: { createPage },
}) => {


  // HOME

  const { data: { allDatoCmsPageHome: { nodes } } } = await graphql(`
  query {
    allDatoCmsPageHome {
      nodes {
        rok
        id
      }
    }
  }
`);

  nodes.forEach(({ id, rok }) => {
    createPage({
      path: '/' + rok + '/',
      component: resolve('src/templates/homepage.jsx'),
      context: {
        id
      },
    });
  });

  // UDZIAL

  const { data: { allDatoCmsPageConference: { nodes: nodesUdzial } } } = await graphql(`
  query {
    allDatoCmsPageConference {
      nodes {
        rok
        id
      }
    }
  }
`);

  nodesUdzial.forEach(({ id, rok }) => {
    createPage({
      path: rok + '/udzial/',
      component: resolve('src/templates/udzial.jsx'),
      context: {
        id,
        rok
      },
    });
  });

  // LOGO

  const { data: { allDatoCmsPageHome: { nodes: nodesLogo } } } = await graphql(`
  query {
    allDatoCmsPageHome {
      nodes {
        rok
        lecturers{
          lecturerSlug
          id
        }
      }
    }
  }
`);

  nodesLogo.forEach(({ lecturers, rok }) => {
    lecturers.forEach(({ lecturerSlug, id }) => {
      createPage({
        path: '/' + rok + '/' + lecturerSlug,
        component: resolve('src/templates/partner.jsx'),
        context: {
          id,
          rok,
          lecturerSlug
        },
      });
    });
  })
}