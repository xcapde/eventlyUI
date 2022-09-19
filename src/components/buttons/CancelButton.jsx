
export const CancelButton = ({ content, callback }) => {
    return (
        <CancelButton onClick={() => callback()}>
            {content}
        </CancelButton>
    )
}