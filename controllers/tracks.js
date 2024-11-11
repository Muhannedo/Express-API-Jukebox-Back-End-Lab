const express = require("express");
const Track = require("../models/track");
const router = express.Router();

// Create a track
router.post("/", async (req, res) => {
  try {
    const track = new Track(req.body);
    await track.save();
    res.status(201).json(track);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all tracks
router.get("/", async (req, res) => {
  try {
    const tracks = await Track.find();
    res.status(200).json(tracks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a single track
router.get("/:id", async (req, res) => {
  try {
    const track = await Track.findById(req.params.id);
    if (!track) {
      return res.status(404).json({ error: error.message });
    }
    res.status(200).json(track);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a track
router.put("/:id", async (req, res) => {
  try {
    const track = await Track.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!track) {
      return res.status(404).json({ error: error.message });
    }
    res.status(200).json(track);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a track
router.delete("/:id", async (req, res) => {
  try {
    const track = await Track.findByIdAndDelete(req.params.id);
    if (!track) {
      return res.status(404).json({ error: error.message });
    }
    res.status(200).json(track);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
