

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
  actions: { createPage  },
}) => {


  // HOME

  const { data: { allDatoCmsPageHome: { nodes } } } = await graphql(`
  query {
    allDatoCmsPageHome {
      nodes {
        isActual
        rok
        id
      }
    }
  }
`);

  let isHomepageCreated = false
  let actualYear = 0

  nodes.forEach(({ id, rok, isActual }) => {

    let path = '/' + rok + '/'

    if (isActual && !isHomepageCreated) {
      path = '/'
      actualYear = rok
    } 

    createPage({
      path: path,
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

    let path = rok + '/udzial/'

    if (rok === actualYear) {
      path = '/udzial/'
    }

    createPage({
      path: path,
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
        isActual
        rok
        lecturers{
          lecturerSlug
          id
        }
      }
    }
  }
`);

  nodesLogo.forEach(({ lecturers, rok, isActual }) => {
    lecturers.forEach(({ lecturerSlug, id }) => {

      let path = '/' + rok + '/' + lecturerSlug

      if (isActual) {
        path = '/' + lecturerSlug + '/'
      }

      createPage({
        path: path,
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