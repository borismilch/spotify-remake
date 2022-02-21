import { createSelector } from "@reduxjs/toolkit";
import { RootState } from ".";

export const selectQueue = createSelector(
  (state: RootState) => state.song,
  (song) => song.queue
)

export const selectCurrentTrack = createSelector(
  (state: RootState) => state.song,
  (song) => song.currentTrack
)

export const selectCurrentIndex = createSelector(
 (state: RootState) => state.song,
 (song) => song.currentIndex
)

export const selectGroup = createSelector(
  (state: RootState) => state.song,
  (song) => song.group
)
export const userSelector = createSelector(
  (state: RootState) => state.user,
  (user) => user.user
)

export const searchSelector = createSelector(
  (state: RootState) => state.search,
  (search) => search.query
)

export const createAlbumSelector = createSelector(
  (state: RootState) => state.createAlbum,
  (createAlbum) => createAlbum.newAlbum
)

export const createAlbumTracksSelector = createSelector(
  (state: RootState) => state.createAlbumTracks,
  (stacks) => stacks.tracks
)

export const scrollTopSelector = createSelector(
  (state: RootState) => state.scroll,
  (scroll) => scroll.scrollTop
)