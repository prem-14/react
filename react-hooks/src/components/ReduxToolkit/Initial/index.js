import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addMovie, addSong, removeMovie, removeSong } from "./store"
import { reset } from "./store"

const ReduxInitial = () => {
    const text = useRef("")
    const dispatch = useDispatch()
    const songs = useSelector(state => {
        return state.songs
    })
    const movies = useSelector(state => {
        return state.movies
    })

    useEffect(() => {
        console.log("songs", songs)
    }, [songs])

    useEffect(() => {
        console.log("movies", movies)
    }, [movies])

    const handleSongAdd = (text) => {
        const action = addSong(text)
        dispatch(action)
    }

    const handleSongRemove = (text) => {
        const action = removeSong(text)
        dispatch(action)
    }

    const handleMovieAdd = (text) => {
        const action = addMovie(text)
        dispatch(action)
    }

    const handleMovieRemove = (text) => {
        const action = removeMovie(text)
        dispatch(action)
    }
    const handleResetBoth = () => {
        dispatch(reset())
    }

    return (
        <div>
            <input ref={text} type="text" />
            <button onClick={handleResetBoth}>Reset</button>
            <h1>Songs</h1>
            <button onClick={() => handleSongAdd(text.current.value)}>Add song</button>
            <button onClick={() => handleSongRemove(text.current.value)}>Remove song</button>

            <h1>Movies</h1>
            <button onClick={() => handleMovieAdd(text.current.value)}>Add movie</button>
            <button onClick={() => handleMovieRemove(text.current.value)}>Remove movie</button>
            {movies}
        </div>
    )
}

export default ReduxInitial