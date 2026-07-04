import {NextResponse} from "next/server";

export async function PUT (request: Request, { params }: { params: { id: string } }) {
    const id = params.id;
    const body = await request.json();

    return NextResponse.json({ 
        message: `Tarea con id ${id} actualizada`,
         datosRecibidos: body
     });

}

//Operacion DELETE

export async function DELETE (request: Request, { params }: { params: { id: string } }) {
    const id = params.id;

    return NextResponse.json({ 
        message: `Tarea con id ${id} eliminada correctamente`
     });
}
