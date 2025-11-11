import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { ShieldAlert } from 'lucide-react';

export function AlertDialogSuccess() {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant="outline">Show Dialog</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Are you absolutely sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently
                        delete your account and remove your data from our
                        servers.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}

export function AlertDialogQuestion() {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant="outline">Aceptar</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        ¿Estás seguro de eliminar este ticket?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        Esta accion es irreversible, tu ticket sera eliminado
                        permanentemente.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancelar</AlertDialogCancel>
                    <AlertDialogAction>Continuar</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}

export function AlertDialogInfoTickets() {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button
                    variant="outline"
                    className="dar:text-slate-800 bg-slate-900 text-slate-50 dark:bg-slate-100"
                >
                    Ver Detalles
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle className="text-xl">
                        Detalles del Ticket
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        
                        <div className="w-full">
                            <p className="text-end text-base">
                                <strong>Cod:</strong> 123456
                            </p>
                            <p className="text-base">
                                <strong>Descripción:</strong> Lorem ipsum dolor
                                sit amet consectetur adipisicing elit. A
                                repellendus dolorem corporis facere nihil,
                                cumque beatae. Excepturi soluta animi vero sed,
                                voluptatem consequatur laborum laudantium
                                tempora dolores cum eum tempore.
                            </p>
                            <br />
                            <p className="text-base">
                                <strong>Estado:</strong> Algun Estado - En
                                Espera - En Proceso - Finalizado
                            </p>
                            <p className="text-base">
                                <strong>Prioridad:</strong>{' '}
                                <ShieldAlert className="mr-1 inline-block" />
                                Alguna Prioridad
                            </p>
                            <p className="text-base">
                                <strong>Jefatura:</strong> Nombre de la Jefatura
                            </p>
                            <p className="text-base">
                                <strong>Fecha de Creación:</strong> 06-11-2025
                            </p>
                            <p className="text-base">
                                <strong>Asignado a:</strong> Nombre de la
                                Persona Asignada
                            </p>
                        </div>
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogAction>Cerrar</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
