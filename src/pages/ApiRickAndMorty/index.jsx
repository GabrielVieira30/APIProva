import { useEffect, useState } from 'react'  
import './styles.css'  
import Card from '../../components/Card'  

export default function ApiRickAndMorty() {  
    const [conteudo, setConteudo] = useState(<p>Carregando...</p>)  

    async function getPosts() {  
        const reqOptions = {  
            method: "GET",  
            redirect: "follow"  
        }  

        const response = await fetch(  
            "https://jsonplaceholder.typicode.com/photos",  
            reqOptions  
        )  

        if (!response.ok) {  
            throw new Error("Erro na requisição HTTP")  
        }  

        const apiResponse = await response.json()  
        return apiResponse  
    }  

    async function buildCards() {  
        const posts = await getPosts()  
        
        return posts.map(post => <Card key={post.id} data={post} />) // Adicionando uma chave única  
    }  

    useEffect(() => {  
        async function getConteudo() {  
            const cards = await buildCards()  
            setConteudo(cards)  
        }  

        getConteudo()  
    }, [])  

    return (  
        <div className='list-api'>  
            {conteudo}  
        </div>  
    )   
}