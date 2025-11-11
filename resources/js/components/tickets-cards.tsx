import { AlertDialogInfoTickets } from '@/components/alerts-dialogs';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function TicketsCards() {
    return (
        <div className="flex w-full max-w-screen flex-col gap-4 border-cyan-200">
            <Tabs defaultValue="all" className="w-full border-cyan-400">
                <TabsList className="mb-2 w-full grid-cols-4 border-cyan-600">
                    <TabsTrigger value="all">Todos</TabsTrigger>
                    <TabsTrigger value="pending">Pendientes</TabsTrigger>
                    <TabsTrigger value="inProgress">En Progreso</TabsTrigger>
                    <TabsTrigger value="completed">Completados</TabsTrigger>
                </TabsList>
                <div className="w-full border-cyan-800">
                    {/* Card Content for All Tickets of Any Status and Any Person/User/Admin */}
                    <TabsContent
                        value="all"
                        className="grid grid-cols-3 max-sm:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3"
                    >
                        {Array.from({ length: 51 }).map((_, i) => {
                            const priorities = ['Baja', 'Media', 'Alta'];
                            const priority = priorities[i % 3];
                            const priorityClassMap: Record<string, string> = {
                                Baja: 'text-green-600 dark:text-green-400',
                                Media: 'text-yellow-600 dark:text-yellow-400',
                                Alta: 'text-red-600 dark:text-red-400',
                            };
                            const priorityClass =
                                priorityClassMap[priority] ??
                                'text-purple-400 dark:text-purple-950';
                            return (
                                <Card key={i} className="m-4">
                                    <CardHeader className="gap-4">
                                        <div>
                                            <CardTitle className="text-lg">
                                                Titulo {i + 1}
                                            </CardTitle>
                                            <CardDescription className="text-base">
                                                Cod.{' '}
                                                {Math.random()
                                                    .toString(36)
                                                    .substring(2, 8)
                                                    .toUpperCase()}
                                            </CardDescription>
                                            <p className="m-0 text-sm text-muted-foreground">
                                                Descripción del ticket número:{' '}
                                                <span className="text-purple-950 dark:text-purple-400">
                                                    {i + 1}
                                                </span>
                                            </p>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="grid gap-4">
                                        <div className="grid gap-1">
                                            <div>
                                                Estado:{' '}
                                                <span className="text-purple-950 dark:text-purple-400">
                                                    {
                                                        [
                                                            'Pendiente',
                                                            'En Progreso',
                                                            'Completado',
                                                        ][i % 3]
                                                    }
                                                </span>
                                            </div>
                                            <div>
                                                Prioridad:{' '}
                                                <span className={priorityClass}>
                                                    {priority}
                                                </span>
                                            </div>
                                            <div>
                                                Jefatura:{' '}
                                                <span className="text-purple-950 dark:text-purple-400">
                                                    {
                                                        [
                                                            'Soporte',
                                                            'Desarrollo',
                                                            'Ventas',
                                                        ][i % 3]
                                                    }
                                                </span>
                                            </div>
                                            <div>
                                                Fecha de Creación:{' '}
                                                <span className="text-purple-950 dark:text-purple-400">
                                                    {new Date(
                                                        Date.now() -
                                                            i * 86400000,
                                                    ).toLocaleDateString()}
                                                </span>
                                            </div>
                                        </div>
                                    </CardContent>
                                    <CardFooter>
                                        <AlertDialogInfoTickets />
                                    </CardFooter>
                                </Card>
                            );
                        })}
                    </TabsContent>

                    {/* Card Content for only Pending Status Tickets of Any Person/User/Admin */}
                    <TabsContent
                        value="pending"
                        className="grid grid-cols-3 max-sm:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3"
                    >
                        {Array.from({ length: 51 }).map((_, i) => {
                            const priorities = ['Baja', 'Media', 'Alta'];
                            const priority = priorities[i % 3];
                            const status = [
                                'Pendiente',
                                'En Progreso',
                                'Completado',
                            ][i % 3];
                            if (status !== 'Pendiente') return null;
                            const priorityClassMap: Record<string, string> = {
                                Baja: 'text-green-600 dark:text-green-400',
                                Media: 'text-yellow-600 dark:text-yellow-400',
                                Alta: 'text-red-600 dark:text-red-400',
                            };
                            const priorityClass =
                                priorityClassMap[priority] ??
                                'text-purple-400 dark:text-purple-950';

                            return (
                                <Card key={i} className="m-4">
                                    <CardHeader className="gap-4">
                                        <div>
                                            <CardTitle className="text-lg">
                                                Titulo {i + 1}
                                            </CardTitle>
                                            <CardDescription className="text-base">
                                                Cod.{' '}
                                                {Math.random()
                                                    .toString(36)
                                                    .substring(2, 8)
                                                    .toUpperCase()}
                                            </CardDescription>
                                            <p className="m-0 text-sm text-muted-foreground">
                                                Descripción del ticket número:{' '}
                                                <span className="text-purple-950 dark:text-purple-400">
                                                    {i + 1}
                                                </span>
                                            </p>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="grid gap-4">
                                        <div className="grid gap-1">
                                            <div>
                                                Estado:{' '}
                                                <span className="text-purple-950 dark:text-purple-400">
                                                    {
                                                        [
                                                            'Pendiente',
                                                            'En Progreso',
                                                            'Completado',
                                                        ][i % 3]
                                                    }
                                                </span>
                                            </div>
                                            <div>
                                                Prioridad:{' '}
                                                <span className={priorityClass}>
                                                    {priority}
                                                </span>
                                            </div>
                                            <div>
                                                Jefatura:{' '}
                                                <span className="text-purple-950 dark:text-purple-400">
                                                    {
                                                        [
                                                            'Soporte',
                                                            'Desarrollo',
                                                            'Ventas',
                                                        ][i % 3]
                                                    }
                                                </span>
                                            </div>
                                            <div>
                                                Fecha de Creación:{' '}
                                                <span className="text-purple-950 dark:text-purple-400">
                                                    {new Date(
                                                        Date.now() -
                                                            i * 86400000,
                                                    ).toLocaleDateString()}
                                                </span>
                                            </div>
                                        </div>
                                    </CardContent>
                                    <CardFooter>
                                        <AlertDialogInfoTickets />
                                    </CardFooter>
                                </Card>
                            );
                        })}
                    </TabsContent>

                    {/* Card Content for only In Progress Status Tickets of Any Person/User/Admin */}
                    <TabsContent
                        value="inProgress"
                        className="grid grid-cols-3 max-sm:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3"
                    >
                        {Array.from({ length: 51 }).map((_, i) => {
                            const priorities = ['Baja', 'Media', 'Alta'];
                            const priority = priorities[i % 3];
                            const status = [
                                'Pendiente',
                                'En Progreso',
                                'Completado',
                            ][i % 3];
                            if (status !== 'En Progreso') return null;
                            const priorityClassMap: Record<string, string> = {
                                Baja: 'text-green-600 dark:text-green-400',
                                Media: 'text-yellow-600 dark:text-yellow-400',
                                Alta: 'text-red-600 dark:text-red-400',
                            };
                            const priorityClass =
                                priorityClassMap[priority] ??
                                'text-purple-400 dark:text-purple-950';

                            return (
                                <Card key={i} className="m-4">
                                    <CardHeader className="gap-4">
                                        <div>
                                            <CardTitle className="text-lg">
                                                Titulo {i + 1}
                                            </CardTitle>
                                            <CardDescription className="text-base">
                                                Cod.{' '}
                                                {Math.random()
                                                    .toString(36)
                                                    .substring(2, 8)
                                                    .toUpperCase()}
                                            </CardDescription>
                                            <p className="m-0 text-sm text-muted-foreground">
                                                Descripción del ticket número:{' '}
                                                <span className="text-purple-950 dark:text-purple-400">
                                                    {i + 1}
                                                </span>
                                            </p>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="grid gap-4">
                                        <div className="grid gap-1">
                                            <div>
                                                Estado:{' '}
                                                <span className="text-purple-950 dark:text-purple-400">
                                                    {
                                                        [
                                                            'Pendiente',
                                                            'En Progreso',
                                                            'Completado',
                                                        ][i % 3]
                                                    }
                                                </span>
                                            </div>
                                            <div>
                                                Prioridad:{' '}
                                                <span className={priorityClass}>
                                                    {priority}
                                                </span>
                                            </div>
                                            <div>
                                                Jefatura:{' '}
                                                <span className="text-purple-950 dark:text-purple-400">
                                                    {
                                                        [
                                                            'Soporte',
                                                            'Desarrollo',
                                                            'Ventas',
                                                        ][i % 3]
                                                    }
                                                </span>
                                            </div>
                                            <div>
                                                Fecha de Creación:{' '}
                                                <span className="text-purple-950 dark:text-purple-400">
                                                    {new Date(
                                                        Date.now() -
                                                            i * 86400000,
                                                    ).toLocaleDateString()}
                                                </span>
                                            </div>
                                        </div>
                                    </CardContent>
                                    <CardFooter>
                                        <AlertDialogInfoTickets />
                                    </CardFooter>
                                </Card>
                            );
                        })}
                    </TabsContent>

                    {/* Card Content for only Completed Status Tickets of Any Person/User/Admin */}
                    <TabsContent
                        value="completed"
                        className="grid grid-cols-3 max-sm:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3"
                    >
                        {Array.from({ length: 51 }).map((_, i) => {
                            const priorities = ['Baja', 'Media', 'Alta'];
                            const priority = priorities[i % 3];
                            const status = [
                                'Pendiente',
                                'En Progreso',
                                'Completado',
                            ][i % 3];
                            if (status !== 'Completado') return null;
                            const priorityClassMap: Record<string, string> = {
                                Baja: 'text-green-600 dark:text-green-400',
                                Media: 'text-yellow-600 dark:text-yellow-400',
                                Alta: 'text-red-600 dark:text-red-400',
                            };
                            const priorityClass =
                                priorityClassMap[priority] ??
                                'text-purple-400 dark:text-purple-950';

                            return (
                                <Card key={i} className="m-4">
                                    <CardHeader className="gap-4">
                                        <div>
                                            <CardTitle className="text-lg">
                                                Titulo {i + 1}
                                            </CardTitle>
                                            <CardDescription className="text-base">
                                                Cod.{' '}
                                                {Math.random()
                                                    .toString(36)
                                                    .substring(2, 8)
                                                    .toUpperCase()}
                                            </CardDescription>
                                            <p className="m-0 text-sm text-muted-foreground">
                                                Descripción del ticket número:{' '}
                                                <span className="text-purple-950 dark:text-purple-400">
                                                    {i + 1}
                                                </span>
                                            </p>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="grid gap-4">
                                        <div className="grid gap-1">
                                            <div>
                                                Estado:{' '}
                                                <span className="text-purple-950 dark:text-purple-400">
                                                    {
                                                        [
                                                            'Pendiente',
                                                            'En Progreso',
                                                            'Completado',
                                                        ][i % 3]
                                                    }
                                                </span>
                                            </div>
                                            <div>
                                                Prioridad:{' '}
                                                <span className={priorityClass}>
                                                    {priority}
                                                </span>
                                            </div>
                                            <div>
                                                Jefatura:{' '}
                                                <span className="text-purple-950 dark:text-purple-400">
                                                    {
                                                        [
                                                            'Soporte',
                                                            'Desarrollo',
                                                            'Ventas',
                                                        ][i % 3]
                                                    }
                                                </span>
                                            </div>
                                            <div>
                                                Fecha de Creación:{' '}
                                                <span className="text-purple-950 dark:text-purple-400">
                                                    {new Date(
                                                        Date.now() -
                                                            i * 86400000,
                                                    ).toLocaleDateString()}
                                                </span>
                                            </div>
                                        </div>
                                    </CardContent>
                                    <CardFooter>
                                        <AlertDialogInfoTickets />
                                    </CardFooter>
                                </Card>
                            );
                        })}
                    </TabsContent>
                </div>
            </Tabs>
        </div>
    );
}
