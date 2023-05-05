import { configureStore, createSlice, createAction } from "@reduxjs/toolkit";

const reset = createAction("app/reset")

const songsSlice = createSlice({
    name: "song",
    initialState: [],
    reducers: {
        addSong(state, action) {
            state.push(action.payload)
        },
        removeSong(state, action) {
            const index = state.indexOf(action.payload)
            state.splice(index, 1)
        },
    },
    extraReducers(builder) {
        builder.addCase(reset, (state, action) => {
            return []
        })
    }
})

const movieSlice = createSlice({
    name: "movie",
    initialState: [],
    reducers: {
        addMovie(state, action) {
            state.push(action.payload)
        },
        removeMovie(state, action) {
            const index = state.indexOf(action.payload)
            state.splice(index, 1)
        },
    },
    extraReducers(builder) {
        builder.addCase(reset, (state, action) => {
            return []
        })
    }
})

const store = configureStore({
    reducer: {
        songs: songsSlice.reducer,
        movies: movieSlice.reducer
    }
})

// console.log(JSON.stringify(store))
// console.log(store.getState())
// console.log(songsSlice.actions)
// console.log(songsSlice.actions.addSong())
// console.log(songsSlice.actions.addSong("Some song"))

// store.dispatch(songsSlice.actions.addSong("Some song"))


// console.log(store.getState())

export default store
export { reset }
export const { addSong, removeSong } = songsSlice.actions
export const { addMovie, removeMovie } = movieSlice.actions
