type Props = {
    name: String
    age?: number
} & ({
    sex: "male"
    salary: number
} | {
    sex: 'female'
    weight: number
})


const Child = ({name, sex, salary}: Props) => {
    return <div>Child</div>
}