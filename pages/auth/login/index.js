import getConfig from 'next/config';
import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';
import AppConfig from '../../../layout/AppConfig';
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import { LayoutContext } from '../../../layout/context/layoutcontext';
import { InputText } from 'primereact/inputtext';
import { classNames } from 'primereact/utils';
import { Dropdown } from 'primereact/dropdown';
import { Divider } from 'primereact/divider';



const LoginPage = () => {
    const [password, setPassword] = useState('');
    const [checked, setChecked] = useState(false);
    const [loginValue, setLoginValue] = useState(null);
    const { layoutConfig } = useContext(LayoutContext);
    const contextPath = getConfig().publicRuntimeConfig.contextPath;
    const router = useRouter();
    const containerClassName = classNames('surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden', {'p-input-filled': layoutConfig.inputStyle === 'filled'});

    const loginValues = [
        { name: 'Representante', code: 'vendas' },
        { name: 'Colaborador', code: 'emis' }
    ];

    return (
        <div className={containerClassName}>
            <div className="flex flex-column align-items-center justify-content-center">
                <div style={{ borderRadius: '56px', padding: '0.3rem', background: 'linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)' }}>
                    <div className="w-full surface-card py-7 px-5 sm:px-8" style={{ borderRadius: '53px' }}>
                        <div className="flex align-items-center justify-content-center mb-3">
                            <img src={`${contextPath}/layout/images/logoVerticalEmis-${layoutConfig.colorScheme === 'light' ? 'dark' : 'white'}.png`} alt="Emis Logo" className="mb-5 w-9rem flex-shrink-0"/>
                        </div>
                        <div>
                            <label htmlFor="email1" className="block text-900 text-xl font-medium mb-1">
                                Acesso
                            </label>
                            <Dropdown className='w-full md:w-30rem' value={loginValue} onChange={(e) => setLoginValue(e.value)} options={loginValues} optionLabel="name" placeholder="Acesso" />
                        </div>
                        <Divider layout="horizontal" align="center"/>
                        <div>
                            <label htmlFor="email1" className="block text-900 text-xl font-medium mb-2">
                                Usuário
                            </label>
                            <InputText inputid="email1" type="text" placeholder="Usuário" className="w-full md:w-30rem mb-5" style={{ padding: '1rem' }} />

                            <label htmlFor="password1" className="block text-900 font-medium text-xl mb-2">
                                Senha
                            </label>
                            <Password inputid="password1" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Senha" toggleMask feedback={false} className="w-full mb-5" inputClassName='w-full p-3 md:w-30rem'></Password>

                            <div className="flex align-items-center justify-content-between mb-5 gap-5">
                                <a className="font-medium no-underline ml-2 text-right cursor-pointer" style={{ color: 'var(--primary-color)' }}>
                                    Esqueceu a senha?
                                </a>
                            </div>
                            <Button label="Logar" className="w-full p-3 text-xl" onClick={() => router.push('/')}></Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

LoginPage.getLayout = function getLayout(page) {
    return (
        <React.Fragment>
            {page}
            <AppConfig simple />
        </React.Fragment>
    );
};
export default LoginPage;
