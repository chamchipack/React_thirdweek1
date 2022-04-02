const UPLOAD = 'image/UPDATE';

const initialState = {
    list : []
}

export function uploadImage(image){
    return {type : UPLOAD, image}
}

export default function reducer(state = initialState, action = {} ){
    switch (action.type){
        case "image/UPDATE" : {
            const widget = action.image;
            return {
                result : widget
            }
        }
    }
}