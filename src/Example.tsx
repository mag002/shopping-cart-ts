
function Example(props: any) {
    console.log(props)
    return <div style={{ color: 'red' }}>
        {props.title}
    </div>
}

export default Example;