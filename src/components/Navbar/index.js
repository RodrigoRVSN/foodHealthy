import React, { useState } from 'react';
import { Navbar, Bars, NavMenu, NavCadastro, BotaoCadastro, LinkNavegacao } from './styles';

const NavbarHealthy = () => {

    const [open, setOpen] = useState(false);


    return (
        <>
            <Navbar>
                <LinkNavegacao to='/'>
                    <h2>Healthy Food</h2>
                </LinkNavegacao>
                <Bars open={open} setOpen={setOpen} onClick={() => setOpen(!open)}/>
                <NavMenu open={open} setOpen={setOpen} >
                    <LinkNavegacao to='/#' activeStyle>
                        HEALTHY RECIPES
                    </LinkNavegacao>
                    <LinkNavegacao to='/#' activeStyle>
                        BLOG
                    </LinkNavegacao>
                    <LinkNavegacao to='/#' activeStyle>
                        JOIN
                    </LinkNavegacao>
                    <NavCadastro>
                        <BotaoCadastro to='/cadastro'>REGISTER</BotaoCadastro>
                    </NavCadastro>
                </NavMenu>
            </Navbar>
        </>
    );
};

export default NavbarHealthy;