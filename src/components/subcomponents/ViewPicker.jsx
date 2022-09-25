import { Row } from "../../styles/styles.styled"
import { Dot } from "../../views/landing/landing.styled"

export const ViewPicker = ({ current, views, setView }) => {

    views.map((v, k) => console.log(k))

    return (
        <Row>
            {views.map((view, key) => (
                <Dot key={key}
                    bg={current === key ? 'var(--color-dark)' : ''}
                    onClick={(key) => setView(key)}
                />
            ))}
        </Row>
    )
}