import React, { useState } from 'react';
import { Navbar, Bars, NavMenu, NavCadastro, BotaoCadastro, LinkNavegacao, Closes } from './styles';

const NavbarHealthy = () => {

    const [open, setOpen] = useState(false);


    return (
        <>
            <Navbar>
                <LinkNavegacao to='/'>
                    <h2>Healthy Food</h2>
                </LinkNavegacao>
                <Closes open={open} setOpen={setOpen} onClick={() => setOpen(!open)} />
                <Bars open={open} setOpen={setOpen} onClick={() => setOpen(!open)} />
                <NavMenu open={open} setOpen={setOpen} >
                    <LinkNavegacao to='/cadastro' open={open} setOpen={setOpen} onClick={() => setOpen(!open)} activeStyle>
                        HEALTHY RECIPES
                    </LinkNavegacao>
                    <LinkNavegacao to='/cadastro' open={open} setOpen={setOpen} onClick={() => setOpen(!open)} activeStyle>
                        BLOG
                    </LinkNavegacao>
                    <LinkNavegacao to='/login' open={open} setOpen={setOpen} onClick={() => setOpen(!open)} activeStyle>
                        JOIN
                    </LinkNavegacao>
                    <NavCadastro>
                        <BotaoCadastro to='/cadastro' open={open} setOpen={setOpen} onClick={() => setOpen(!open)} >REGISTER</BotaoCadastro>
                    </NavCadastro>
                </NavMenu>
            </Navbar>
        </>
    );
};

export default NavbarHealthy;