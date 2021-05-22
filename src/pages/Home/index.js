import { useState } from "react";
import { useCookies } from "react-cookie";
import { FaArrowAltCircleLeft, FaRegArrowAltCircleRight, FaSearch } from "react-icons/fa";
import BestRecipeCard from "../../components/BestRecipeCard";
import BlogCard from "../../components/BlogCard";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Img, Inicio, InicioPesquisa, Search, Title, RecipesDiv, Description, RecipesRow, BlocoServices, CtaColumn, IconRow, IconRight, BlogDiv, BlogCardDiv, MembershipDiv, MemberColumn, MemberCta } from "./styles";

export default function Home() {

    /* Funções responsáveis pelo scroll em X da página na parte do blog */
    const [scrollBlog, setScrollBlog] = useState(0);
    const moveLeft = () => {
        let xLeft = Math.round(window.innerWidth / 2);
        if (scrollBlog < 10) {
            xLeft = 0;
        }
        setScrollBlog(xLeft);
    }
    const moveRight = () => {
        let xRight = (scrollBlog - 250);
        if (scrollBlog < -200) {
            xRight = 0;
        }
        setScrollBlog(xRight);
    }

    let contador = localStorage.getItem('iteracaoLogin');
    const [cookies] = useCookies(['healthy']);

    /* Renderização do html */
    return (
        <>
            {/* Primeiro bloco */}
            <Inicio>
                <InicioPesquisa>
                    <h2>Ready for Trying a new recipe {(contador === null) ? '' : (JSON.stringify(cookies[`healthy${contador}`].name).replace(/["]/g, ''))}?</h2>
                    <Search>
                        <Input holder={'Search healthy recipes'} />
                        <FaSearch color="#bfd200" />
                    </Search>
                </InicioPesquisa>
                <Img src="/img/Illustration.svg" alt="Background" />
            </Inicio>

            {/* Melhores pratos div */}
            <RecipesDiv>
                <Title>Our Best Recipes</Title>
                <Description>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</Description>
                <RecipesRow>
                    <BestRecipeCard src={'img/comida_1.svg'} title={'Broccoli Salad with Bacon'} />
                    <BestRecipeCard src={'img/comida_2.svg'} title={'Classic Beef Burgers'} />
                </RecipesRow>
                <RecipesRow>
                    <BestRecipeCard src={'img/comida_3.svg'} title={'Classic Potato Salad'} />
                    <BestRecipeCard src={'img/comida_4.svg'} title={'Cherry Cobbler on the Grill'} />
                </RecipesRow>
            </RecipesDiv>

            {/* Bloco de serviços */}
            <BlocoServices>
                <img src="/img/bloco_services.svg" alt="Services Section" />
                <CtaColumn>
                    <Title>The best services ready To serve you</Title>
                    <Description width="100%">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </Description>
                    <Description width="100%">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. </Description>
                    <Description width="100%">A small river named Duden flows by their place and supplies it with the necessary regelialia. </Description>
                    <Button text={'Know More'} ></Button>
                </CtaColumn>
            </BlocoServices>

            {/* Bloco do blog */}
            <BlogDiv>
                <Title>Read Our Blog</Title>
                <Description>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</Description>
                <IconRow >
                    <FaArrowAltCircleLeft onClick={moveLeft} />
                    <IconRight>
                        <FaRegArrowAltCircleRight onClick={moveRight} />
                    </IconRight>
                </IconRow>
                <BlogCardDiv style={{ marginLeft: scrollBlog }}>
                    <BlogCard src={'/img/blog_image_1.svg'} title={'Quick-start guide to nuts and seeds'} photo={'https://avatars.githubusercontent.com/u/75763403?v=4'} name={'Rodrigo Victor'} />
                    <BlogCard src={'/img/bloco_image_2.svg'} title={'Nutrition: Tips for Improving Your Healt'} photo={'https://cachedimages.podchaser.com/256x256/aHR0cHM6Ly9jcmVhdG9yLWltYWdlcy5wb2RjaGFzZXIuY29tL2RmODZjM2RjZTg5ZDI2ZGQzZWI5NWU4YzI1MDBhMTIyLmpwZWc%3D/aHR0cHM6Ly93d3cucG9kY2hhc2VyLmNvbS9pbWFnZXMvbWlzc2luZy1pbWFnZS5wbmc%3D'} name={'Elon Musk'} />
                    <BlogCard src={'/img/bloco_image_3.svg'} title={'The top 10 benefits of eating healthy'} photo={'https://cdn.hashnode.com/res/hashnode/image/upload/v1598233527405/jB3NBSqZa.jpeg'} name={'Diego Fernandes'} />
                    <BlogCard src={'/img/bloco_image_4.svg'} title={'What is bad food for your health'} photo={'https://pm1.narvii.com/6592/0559113767f2a3078f90096da338c55b239fe747_128.jpg'} name={'Michael Jackson'} />
                </BlogCardDiv>
            </BlogDiv>

            {/* Bloco do CTA */}
            <MembershipDiv>
                <MemberColumn>
                    <Title>Join our membership to get special offer</Title>
                    <MemberCta>
                        <Input holder={'Enter your email address'} />
                        <Button text={'Join'} ></Button>
                    </MemberCta>
                </MemberColumn>
                <img src="img/bloco_final_image.svg" alt="get special offer" />
            </MembershipDiv>
        </>
    );
}

