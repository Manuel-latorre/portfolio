"use client";
import Image from "next/image";
import routes from './images/routes.png'

import { BackgroundGradientLg } from "@/components/ui/Background-gradient-lg";
import { Button, Link } from "@nextui-org/react";
import { useLanguage } from "@/context/LanguageContext";



export default function Api(){
    
    const { isEnglish} = useLanguage();
    

    return(
        <div className="flex flex-col w-9/12 mx-auto max-xl:w-full max-xl:p-10">
            <div className="flex items-center mt-10 gap-3">
                <p className="font-semibold text-2xl text-white">Tech Shop API Database</p>
            </div>
            <div className="mt-2 flex flex-col gap-3">
            <p className="text-sm text-white">{isEnglish ? "February 2024" : "Febrero 2024"}</p>
            </div>
            <div className="flex items-start justify-between max-xl:flex-col">
                <div className="xl:w-2/4 mt-10">
                    <p className="text-zinc-300">
                        {isEnglish ? "Tech Shop API Database is a database that has 3 models." : "Tech Shop API Database es un base de datos que cuenta con 3 modelos."}
                    </p>
                    <ul className="mt-3 flex flex-col gap-4">
                        <li className="flex items-center gap-2">
                            <svg width={20} height={20} fill="#ffffff" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M 16 4 C 9.382813 4 4 9.382813 4 16 C 4 22.617188 9.382813 28 16 28 C 22.617188 28 28 22.617188 28 16 C 28 9.382813 22.617188 4 16 4 Z M 16 6 C 21.535156 6 26 10.464844 26 16 C 26 21.535156 21.535156 26 16 26 C 10.464844 26 6 21.535156 6 16 C 6 10.464844 10.464844 6 16 6 Z M 16 13 C 14.34375 13 13 14.34375 13 16 C 13 17.65625 14.34375 19 16 19 C 17.65625 19 19 17.65625 19 16 C 19 14.34375 17.65625 13 16 13 Z"></path></g></svg>
                            <p className="text-zinc-300 text-md">{isEnglish ? "Products: This model represents the products available in the store. Each product has properties such as name, description, price, category, etc." : "Productos: Este modelo representa los productos disponibles en la tienda. Cada producto tiene propiedades como nombre, descripción, precio, categoría, etc."}</p>
                        </li>
                        <li className="flex items-center gap-2">
                            <svg width={20} height={20} fill="#ffffff" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M 16 4 C 9.382813 4 4 9.382813 4 16 C 4 22.617188 9.382813 28 16 28 C 22.617188 28 28 22.617188 28 16 C 28 9.382813 22.617188 4 16 4 Z M 16 6 C 21.535156 6 26 10.464844 26 16 C 26 21.535156 21.535156 26 16 26 C 10.464844 26 6 21.535156 6 16 C 6 10.464844 10.464844 6 16 6 Z M 16 13 C 14.34375 13 13 14.34375 13 16 C 13 17.65625 14.34375 19 16 19 C 17.65625 19 19 17.65625 19 16 C 19 14.34375 17.65625 13 16 13 Z"></path></g></svg>
                            <p className="text-zinc-300 text-md">{isEnglish ? "Cart: This model manages the information of the users who use the application. Each user has properties such as name, email, password, etc." : "Carrito: Este modelo gestiona la información de los usuarios que utilizan la aplicación. Cada usuario tiene propiedades como nombre, correo electrónico, contraseña, etc."}</p>
                        </li>
                        <li className="flex items-center gap-2">
                            <svg width={20} height={20} fill="#ffffff" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M 16 4 C 9.382813 4 4 9.382813 4 16 C 4 22.617188 9.382813 28 16 28 C 22.617188 28 28 22.617188 28 16 C 28 9.382813 22.617188 4 16 4 Z M 16 6 C 21.535156 6 26 10.464844 26 16 C 26 21.535156 21.535156 26 16 26 C 10.464844 26 6 21.535156 6 16 C 6 10.464844 10.464844 6 16 6 Z M 16 13 C 14.34375 13 13 14.34375 13 16 C 13 17.65625 14.34375 19 16 19 C 17.65625 19 19 17.65625 19 16 C 19 14.34375 17.65625 13 16 13 Z"></path></g></svg>
                            <p className="text-zinc-300 text-md">{isEnglish ? "Users: This model records the products that users add to their shopping cart. Each cart has properties such as the user ID, a list of products, and the quantity of each product." : "Usuarios: Este modelo registra los productos que los usuarios agregan a su carrito de compras. Cada carrito tiene propiedades como el ID del usuario, una lista de productos y la cantidad de cada producto."}</p>
                        </li>
                    </ul>
                    <div className="flex flex-col mt-4 gap-4 text-zinc-300">
                        <p>{isEnglish ? "The system implements a full CRUD for each of these models, allowing for creation, reading, updating, and deletion of products, users, and carts." : "El sistema implementa un CRUD completo para cada uno de estos modelos, lo que permite realizar operaciones de creación, lectura, actualización y eliminación de productos, usuarios y carritos."}</p>
                        <p>{isEnglish ? "The backend is developed with Express, which handles the routes and drivers for each CRUD operation. MongoDB is used as the database to store information persistently." : "El backend está desarrollado con Express, que maneja las rutas y controladores para cada operación CRUD. Se utiliza MongoDB como base de datos para almacenar la información de manera persistente."}</p>
                        <p>{isEnglish ? "In short, this app provides a complete platform for managing products, users, and shopping carts, allowing users to perform CRUD operations on them efficiently and securely." : "En resumen, esta aplicación proporciona una plataforma completa para administrar productos, usuarios y carritos de compra, permitiendo a los usuarios realizar operaciones CRUD sobre ellos de manera eficiente y segura."}</p>                    
                    </div>
                    <div className="flex items-center gap-5 mt-5">
                        <Button as={Link} href="https://github.com/Manuel-latorre/api-ecommerce" variant="shadow" color="secondary" size="sm" className="flex items-center" target="_blank">
                            <svg width={18} height={18} viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>github [#142]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#ffffff"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]"> </path> </g> </g> </g> </g></svg>
                            Github
                        </Button>
                        <Button as={Link} href="https://github.com/Manuel-latorre/api-ecommerce" variant="shadow" color="default" size="sm" className="flex items-center" target="_blank">
                            <svg width={20} height={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.982 19.61c.454-.7.909-1.6 1.236-2.755.755.29 1.273.636 1.591.909a8.182 8.182 0 0 1-2.864 1.845h.037v.001zm-8.8-1.855c.336-.273.845-.61 1.6-.91.336 1.164.773 2.064 1.236 2.764A8.2 8.2 0 0 1 6.2 17.755h-.018zm10.636-6.664c-.028-.81-.11-1.619-.245-2.418 1-.364 1.727-.8 2.236-1.2a8.136 8.136 0 0 1 1.282 3.618h-3.273zm-8.973-4.2a5.936 5.936 0 0 1-1.481-.8 8.2 8.2 0 0 1 2.654-1.7c-.427.636-.845 1.454-1.182 2.5h.01-.001zm7.137-2.5a8.145 8.145 0 0 1 2.654 1.7 6.01 6.01 0 0 1-1.481.8 9.58 9.58 0 0 0-1.182-2.5h.009zM14.8 9.118c.09.6.182 1.246.2 1.973H9c.027-.727.09-1.382.182-1.973 1.855.334 3.754.334 5.609 0h.009zM12 7.545c-.91 0-1.71-.072-2.39-.181.726-2.237 1.854-3.137 2.39-3.455.518.318 1.655 1.227 2.382 3.455A15.04 15.04 0 0 1 12 7.545zm-6.818-.072a8.03 8.03 0 0 0 2.245 1.2 18.368 18.368 0 0 0-.245 2.418h-3.31a8.13 8.13 0 0 1 1.319-3.618h-.01.001zm-1.3 5.436h3.3c.036.782.09 1.5.2 2.155a7.682 7.682 0 0 0-2.31 1.272 8.11 8.11 0 0 1-1.2-3.427h.01zM12 14.364c-1.09 0-2.027.09-2.845.236A16.91 16.91 0 0 1 9 12.91h6c-.027.608-.073 1.18-.145 1.69A15.388 15.388 0 0 0 12 14.355v.009zm0 5.727c-.545-.327-1.745-1.3-2.473-3.727A14.095 14.095 0 0 1 12 16.182c.955 0 1.773.063 2.482.182-.727 2.454-1.927 3.4-2.473 3.727H12zm6.927-3.764a7.634 7.634 0 0 0-2.309-1.272 17.95 17.95 0 0 0 .2-2.146h3.31a8.11 8.11 0 0 1-1.2 3.418h-.001zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" fill="#000000"></path></g></svg>
                            API Rest
                        </Button>
                    </div>
                    <p className="text-zinc-300 font-bold mt-10">{isEnglish ? "Technologies used" : "Tecnologías utilizadas"}</p>
                    <div className="flex items-center gap-2 mt-4 flex-wrap">
                        <div className="p-1 px-2 bg-zinc-600 text-zinc-300 rounded-lg text-sm">
                            Javascript
                        </div>
                        <div className="p-1 px-2 bg-zinc-600 text-zinc-300 rounded-lg text-sm">
                            Express
                        </div>
                        <div className="p-1 px-2 bg-zinc-600 text-zinc-300 rounded-lg text-sm">
                            MongoDB
                        </div>
                    </div>

                </div>
                <div className="">
                    <BackgroundGradientLg className="rounded-lg max-xl:hidden">
                        <Image className="w-[400px] h-[400px] rounded-xl max-xl:hidden" src={routes} alt="cap5"/>
                    </BackgroundGradientLg>
                </div>
            </div>
        </div>
    )
}