import React from "react"
import { Link } from "gatsby"

const RecipeLink = ({ recipe }) => (
  <div>
    <Link to={recipe.frontmatter.path}>
      {recipe.frontmatter.title} ({recipe.frontmatter.date})
    </Link>
  </div>
)

export default RecipeLink