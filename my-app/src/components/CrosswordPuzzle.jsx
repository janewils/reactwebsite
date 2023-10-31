import {Col, Container, Row} from 'react-bootstrap'
export default function CrosswordPuzzle(){


    const puzzleKey = {
        height : 10,
        width : 7,
        words : [
            {
                word: "drivers",
                clue: "Find them in cars",
                x: 0,
                y: 0,
                axis: 'x'
            },
            {
                word: "ear",
                clue: "Use it to listen",
                x: 0,
                y: 1,
                axis: 'x'
            },
            {
                word: "stews",
                clue: "Dishes of meat and vegetable cooked together in water",
                x: 0,
                y: 2,
                axis: 'x'
            },
            {
                word: "toe",
                clue: "Look for one on the end of your foot",
                x: 4,
                y: 3,
                axis: 'x'
            },
            {
                word: "title",
                clue: "The name of a book",
                x: 0,
                y: 5,
                axis: 'x'
            },
            {
                word: "an",
                clue: "Article",
                x: 4,
                y: 6,
                axis: 'x'
            },
            {
                word: "me",
                clue: "Not You",
                x: 1,
                y: 7,
                axis: 'x'
            },
            {
                word: 'mew',
                clue: "Listen to the Kitten",
                x: 4,
                y: 7,
                axis: 'x'
            },
            {
                word: "cars",
                clue: "People like to race them",
                x: 0,
                y: 8,
                axis: 'x',
            },
            {
                word: "or",
                clue: "Little connector",
                x: 0,
                y: 9,
                axis: 'x'
            },
            {
                word: "ate",
                clue: "Past tense. rhymes with a number under ten",
                x: 4,
                y: 9,
                axis: 'x'
            },
            {
                word: "desert",
                clue: "Place without water",
                x: 0,
                y: 0,
                axis: 'y'
            },
            {
                word: "rat",
                clue: "Rodent pest",
                x: 1,
                y: 0,
                axis: 'y'
            },
            {
                word: 'ire',
                clue: "Anger",
                x: 2,
                y: 0,
                axis: 'y'
            },
            {
                word: 'strewn',
                clue: "Scattered all over",
                x: 6,
                y: 0,
                axis: 'y'
            },
            {
                word: 'stream',
                clue: 'A small river',
                x: 4,
                y: 2,
                axis: 'y'
            },
            {
                word: 'other',
                clue: "Not this one but the ____ one",
                x: 2,
                y: 4,
                axis: 'y'
            },
            {
                word: 'neat',
                clue: "The sort of house a mother would be proud of",
                x: 5,
                y: 6,
                axis: 'y'
            },
            {
                word: 'mar',
                clue: "Spoil the work",
                x: 1,
                y: 7,
                axis: 'y'
            },
            {
                word: "co",
                clue: 'Abbreviation',
                x: 0,
                y: 8,
                axis: 'y'
            }
        ]
    }

    function generatePuzzle(){

    }


    return(
        <>
            <Container>
                <Row>
                    <Col>
                    </Col>
                </Row>
            </Container>
        </>
    )
}