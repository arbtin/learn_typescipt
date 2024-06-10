type Props = {
    name: String
    age?: number
} & ( MaleProps | FemaleProps )

type MaleProps = {
    sex: "male"
    salary: number
}

type FemaleProps = {
    sex: 'female'
    weight: number
}

const Child = (props: Props) => {

    //Guard
    if(props.sex === 'male') {
        console.log(props.salary)
    } else if (props.sex === 'female') {
        console.log(props.weight)
    }


    return <div>Child</div>
}