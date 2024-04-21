// Specify by a named type
function getFirstItem<ElementType, OtherElement>(array: ElementType[]) {
    return array[0];
}

const arrayNumbers = [1, 2, 3];
const arrayStrings = ["first", "second", "third"];

arrayStrings.map<string>(() => {
    return "astring";
});

console.log(getFirstItem<number, string>(arrayNumbers));
console.log(getFirstItem<string, number>(arrayStrings));

// Markup using built-in HTML type
const input = document.querySelector<HTMLInputElement>(".input");
input?.value

//Maps with Types
const map = new Map<string, number>([["test", 2]])
map.set("test", 1);

//Maps with internal map
const map2 = new Map<string, Map<string, number>>()
map2.set("test", map.set("2", 1));

//Types
type ApiResponse<Data> = {
    data: Data
    isError: boolean
}

type UserResponse = ApiResponse<{name: string; age: number}> 

const response: UserResponse = {
    data: {
        name: "Tim",
        age: 25,
    },
    isError: false,
}
console.log(typeof(response));

//OR

type UserResponse = ApiResponse<{name: string; age: number}> 

const response2: UserResponse = {
    data: {
        name: "Tim",
        age: 25,
    },
    isError: false,
}
console.log(typeof(response2));

//Again
type BlogResponse = ApiResponse<{title: string}>

const blogresponse: BlogResponse = {
    data: {
        title: "Title",
    },
    isError: false,
}

console.log(typeof(blogresponse));

// Status default value

type ApiResponse<Data = {status: number}> = {
    data: Data
    isError: boolean
}

type StatusResponse = ApiResponse<{status: number}>

const response: ApiResponse = {
    data: {
        status: 200,
    },
    isError: false,
}

console.log(response);

//Extend object
type ApiResponse<Data extends object> = {
    data: Data
    isError: boolean
}

const response: ApiResponse<{ name: string}> = {
    data: {
        name: "string",
    },
    isError: false,
}

console.log(response);

//Extend objecct with default 
type ApiResponse<Data extends object = {status: number }> = {
    data: Data
    isError: boolean
}

const response: ApiResponse = {
    data: {
        status: 200,
    },
    isError: false,
}

console.log(response);
