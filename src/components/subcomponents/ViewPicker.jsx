import { Row } from "../../styles/styles.styled"
import { Dot } from "../../views/landing/landing.styled"

export const ViewPicker = ({ current, views, setView }) => {
    return (
        <Row>
            {views.map((view, key) => (
                <Dot key={key}
                    bg={current === key ? 'var(--color-dark)' : ''}
                    onClick={() => setView(key)}
                />
            ))}
        </Row>
    )
}