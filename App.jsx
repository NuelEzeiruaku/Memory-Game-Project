import { useState, useEffect } from 'react'
import Form from '/components/Form'
import MemoryCard from '/components/MemoryCard'
import AssistiveTechInfo from '/components/AssistiveTechInfo'
import GameOver from '/components/GameOver'
import ErrorCard from '/components/ErrorCard'
import emojiData from '/components/emojiData' 

export default function App() {
    const initialFormData = {category: "animals-and-nature", number: 10}
    
    const [isFirstRender, setIsFirstRender] = useState(true)
    const [formData, setFormData] = useState(initialFormData)
    const [isGameOn, setIsGameOn] = useState(false)
    const [emojisData, setEmojisData] = useState([])
    const [selectedCards, setSelectedCards] = useState([])
    const [matchedCards, setMatchedCards] = useState([])
    const [areAllCardsMatched, setAreAllCardsMatched] = useState(false)
    const [isError, setIsError] = useState(false)
    
    useEffect(() => {
        if (selectedCards.length === 2 && selectedCards[0].name === selectedCards[1].name) {
            setMatchedCards(prevMatchedCards => [...prevMatchedCards, ...selectedCards])
        }
    }, [selectedCards])
    
    useEffect(() => {
        if (emojisData.length && matchedCards.length === emojisData.length) {
            setAreAllCardsMatched(true)
        }
    }, [matchedCards])
    
    function handleFormChange(e) {
        setFormData(prevFormData => ({...prevFormData, [e.target.name]: e.target.value}))
    }
    
    function startGame(e) {
        e.preventDefault()
        
        try {
            const data = emojiData[formData.category] || [];
            
            if (data.length === 0) {
                throw new Error("No emoji data available for selected category")
            }
            
            const dataSlice = getDataSlice(data)
            const emojisArray = getEmojisArray(dataSlice)
            
            setEmojisData(emojisArray)
            setIsGameOn(true)
        } catch(err) {
            console.error(err)
            setIsError(true)
        } finally {
            setIsFirstRender(false)            
        }
    }

    function getDataSlice(data) {
        const randomIndices = getRandomIndices(data)
        
        const dataSlice = randomIndices.reduce((array, index) => {
            array.push(data[index])
            return array
        }, [])

        return dataSlice
    }

    function getRandomIndices(data) {        
        const randomIndicesArray = []
        const pairsToGenerate = Math.min(formData.number / 2, data.length);
 
        for (let i = 0; i < pairsToGenerate; i++) {
            const randomNum = Math.floor(Math.random() * data.length)
            if (!randomIndicesArray.includes(randomNum)) {
                randomIndicesArray.push(randomNum)
            } else {
                i--
            }
        }
        
        return randomIndicesArray
    }

    function getEmojisArray(data) {
        const pairedEmojisArray = [...data, ...data]
        
        for (let i = pairedEmojisArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
            const temp = pairedEmojisArray[i]
            pairedEmojisArray[i] = pairedEmojisArray[j]
            pairedEmojisArray[j] = temp
        }
        
        return pairedEmojisArray
    }
    
    function turnCard(name, index) {
        if (selectedCards.length < 2) {
            setSelectedCards(prevSelectedCards => [...prevSelectedCards, { name, index }])
        } else if (selectedCards.length === 2) {
            setSelectedCards([{ name, index }])
        }
    }
    
    function resetGame() {
        setIsGameOn(false)
        setSelectedCards([])
        setMatchedCards([])
        setAreAllCardsMatched(false)
    }
    
    function resetError() {
        setIsError(false)
    }
    
    return (
        <main>
            <h1>Memory Game</h1>
            {!isGameOn && !isError &&
                <Form
                    handleSubmit={startGame}
                    handleChange={handleFormChange}
                    isFirstRender={isFirstRender}
                />
            }
            {isGameOn && !areAllCardsMatched &&
                <AssistiveTechInfo emojisData={emojisData} matchedCards={matchedCards} />}
            {areAllCardsMatched && <GameOver handleClick={resetGame} />}
            {isGameOn &&
                <MemoryCard
                    handleClick={turnCard}
                    data={emojisData}
                    selectedCards={selectedCards}
                    matchedCards={matchedCards}
                />
            }
            {isError && <ErrorCard handleClick={resetError} />}
        </main>
    )
}