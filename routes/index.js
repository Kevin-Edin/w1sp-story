import express from "express"
import fs from "fs"
const router = express.Router()
const storyData = JSON.parse(fs.readFileSync("./story/story.json", "utf-8"))
const findPage = (id) => {
    return storyData.find(page => page.id === id)
}

router.get("/", (request, response) => {
    response.render("index.njk")
})

router.get("/:id", (request, response) => {
    const id = request.params.id
    const page = findPage(id)

    if (page) {
        response.render("storypage.njk", {
            title: page.title,
            page
        })
    } else {
        response.status(404).json({error: "Page not found"})
    }
})

export default router