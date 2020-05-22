const { resolve } = require("path")

exports.createPages = async ({ graphql, actions }) => {

  const { createPage } = actions

  const exhibitions = await graphql(`
    {
      allContentfulExhibition {
        nodes {
          id
          title
          slug
        }
      }
    }
  `)

  console.log(exhibitions)
  exhibitions.data.allContentfulExhibition.nodes.forEach(syning => {
    const { slug } = syning

    if (!slug) return

    createPage({
      path: slug,
      component: resolve(__dirname, "./src/templates/Syning/index.tsx"),
      context: {
        ...syning
      }
    })
  })
}

