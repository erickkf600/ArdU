const DEFAULT = {
    theme: "default",
}

export default function themeReducer(state = DEFAULT, action: any) {
    if (action.type === "SET_DARK"){
        localStorage.setItem("theme", 'true');
        return {
            ...state,
            theme: action.color
        }
    }
    return state
}