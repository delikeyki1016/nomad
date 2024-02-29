export default function NoticeDetail(props) {
    console.log(props)
    return (
        <h2>공지사항 {props.params.id}</h2>
    )
}