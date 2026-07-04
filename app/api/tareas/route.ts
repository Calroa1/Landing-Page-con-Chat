
import { NextResponse } from "next/server";

const tareas = [ 
    { id: 1, titulo: "Apremder Nexts.js", completada: false},
    { id: 2, titulo: "Hacer ejercicio", completada: false},
    { id: 3, titulo: "Leer un libro", completada: false}

];

export async function GET() {
    return NextResponse.json(tareas);
}

//opercion: CREATE (crear)

export async function POST(request: Request) {

    const body = await request.json();

    const nuevaTarea = {
        id: tareas.length + 1,
        titulo: body.titulo,
        completada: false
    };
    tareas.push(nuevaTarea);

    return NextResponse.json(nuevaTarea, { status: 201 });
}
