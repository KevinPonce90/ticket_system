import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import { Textarea } from '@headlessui/react';

export function TicketsCreate() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline">Crear Ticket</Button>
            </SheetTrigger>
            <SheetContent className="w-[400px] overflow-y-auto">
                <SheetHeader>
                    <SheetTitle className="text-xl">Crear Ticket</SheetTitle>
                    <SheetDescription className="text-lg">
                        Completa los datos de este formulario para crear un
                        nuevo ticket.
                    </SheetDescription>
                </SheetHeader>
                <form>
                    <div className="gap-2 p-4">
                        <Label htmlFor="title">Título</Label>
                        <Input id="title" placeholder="Título del ticket" />
                    </div>
                    <div className="gap-2 p-4">
                        <Label htmlFor="description">Descripción</Label>
                        <Textarea
                            as="textarea"
                            id="description"
                            className="w-full rounded-md border border-input bg-background px-3 py-2"
                            placeholder="Descripción del ticket"
                        />
                    </div>
                    <div className="gap-2 p-4">
                        <Label htmlFor="noPesa">No. de Pesa</Label>
                        <Input id="noPesa" placeholder="No. de Pesa" />
                    </div>
                    <div className="gap-2 p-4">
                        <Label htmlFor="typeService">Tipo de Servicio</Label>
                        <Select>
                            <SelectTrigger id="typeService" className="w-full">
                                <SelectValue placeholder="Selecciona el tipo de servicio" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Tipo de Servicio </SelectLabel>
                                    <SelectItem value="1">
                                        1. PROBLEMAS CON PC
                                    </SelectItem>
                                    <SelectItem value="2">
                                        2. PROBLEMAS CON TELEFONIA
                                    </SelectItem>
                                    <SelectItem value="3">
                                        3. PROBLEMAS CON NO BREAK
                                    </SelectItem>
                                    <SelectItem value="4">
                                        4. PROBLEMAS CON ESCANER
                                    </SelectItem>
                                    <SelectItem value="5">
                                        5. PROBLEMAS DE NAVEGACION O DE INTERNET
                                    </SelectItem>
                                    <SelectItem value="6">
                                        6. ASIGNACION DE ACCESO A INTERNET ( IP
                                        ) NO APLICA PARA EQUIPOS PERSONALES
                                    </SelectItem>
                                    <SelectItem value="7">
                                        7. PROBLEMAS DE SISTEMAS
                                    </SelectItem>
                                    <SelectItem value="8">
                                        8. PROBLEMAS CON MEDIOS EXTRAPOLES
                                        (MEMORIAS USB O DISCO DURO EXTERNO)
                                    </SelectItem>
                                    <SelectItem value="9">
                                        9. PROBLEMAS DE ANTIVIRUS
                                    </SelectItem>
                                    <SelectItem value="10">
                                        10. INSTALACION DE PROGRAMAS
                                    </SelectItem>
                                    <SelectItem value="11">
                                        11. CONFIGURACION DE IMPRESORA
                                    </SelectItem>
                                    <SelectItem value="12">
                                        12. CONFIGURACION DE ESCANER
                                    </SelectItem>
                                    <SelectItem value="13">
                                        13. CONFIGURACION DE MULTIFUNCIONAL
                                    </SelectItem>
                                    <SelectItem value="14">
                                        14. CONFIGURACION DE CARPETAS
                                        COMPARTIDAS
                                    </SelectItem>
                                    <SelectItem value="15">
                                        15. AUMENTO DE SALDO PARA LLAMADAS
                                        TELEFONICAS
                                    </SelectItem>
                                    <SelectItem value="16">
                                        16. FALLAS DE CONTPAQ
                                    </SelectItem>
                                    <SelectItem value="17">
                                        17. FALLAS DE SIIF
                                    </SelectItem>
                                    <SelectItem value="18">
                                        18. FALLAS DE SIAN
                                    </SelectItem>
                                    <SelectItem value="19">19. Otro</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="gap-2 p-4">
                        <Label htmlFor="area">Área</Label>
                        <Select>
                            <SelectTrigger id="area" className="w-full">
                                <SelectValue placeholder="Selecciona el área" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Áreas</SelectLabel>
                                    <SelectItem value="1">Despacho</SelectItem>
                                    <SelectItem value="2">
                                        Comunicación Social
                                    </SelectItem>
                                    <SelectItem value="3">
                                        Dirección de Planeación Programática
                                    </SelectItem>
                                    <SelectItem value="4">
                                        Jefatura de Planeación y Programación
                                    </SelectItem>
                                    <SelectItem value="5">
                                        Jefatura de Evaluación y Seguimiento
                                    </SelectItem>
                                    <SelectItem value="6">
                                        Dirección de Asuntos Jurídicos
                                    </SelectItem>
                                    <SelectItem value="7">
                                        Dirección Administrativa
                                    </SelectItem>
                                    <SelectItem value="8">
                                        Jefatura de Recursos Humanos
                                    </SelectItem>
                                    <SelectItem value="9">
                                        Jefatura de Finanzas
                                    </SelectItem>
                                    <SelectItem value="10">
                                        Jefatura de Sistemas
                                    </SelectItem>
                                    <SelectItem value="11">
                                        Jefatura de Servicios Generales y
                                        Recursos Materiales
                                    </SelectItem>
                                    <SelectItem value="12">
                                        Dirección de Proyectos Estratéticos
                                    </SelectItem>
                                    <SelectItem value="13">
                                        Coordinación de Monitoreo
                                    </SelectItem>
                                    <SelectItem value="14">
                                        Jefatura de Logística
                                    </SelectItem>
                                    <SelectItem value="15">
                                        Órgano de Control Interno
                                    </SelectItem>
                                    <SelectItem value="16">
                                        Subsecretaria para el Desarrollo y
                                        Vinculación de OSC
                                    </SelectItem>
                                    <SelectItem value="17">
                                        Dirección de Operación y Seguimiento
                                    </SelectItem>
                                    <SelectItem value="18">
                                        Dirección de Fondos
                                    </SelectItem>
                                    <SelectItem value="19">
                                        Dirección de Profesionalización
                                    </SelectItem>
                                    <SelectItem value="20">
                                        Jefatura de Auditoria y Supervisión
                                    </SelectItem>
                                    <SelectItem value="21">
                                        Subsecretaria de Gestión Integral de
                                        Recursos y Programas Sociales
                                    </SelectItem>
                                    <SelectItem value="22">
                                        Soporte Técnico
                                    </SelectItem>
                                    <SelectItem value="23">
                                        Dirección de la Operación y de Programas
                                    </SelectItem>
                                    <SelectItem value="24">
                                        Dirección de Programas Federales
                                    </SelectItem>
                                    <SelectItem value="25">
                                        Dirección de Programas Estatales
                                    </SelectItem>
                                    <SelectItem value="26">
                                        Jefatura de Capacitación y Proyectos
                                        Especiales
                                    </SelectItem>
                                    <SelectItem value="27">
                                        Dirección de Vinculación Regional
                                    </SelectItem>
                                    <SelectItem value="28">
                                        Jefatura de Vinculación Regional
                                    </SelectItem>
                                    <SelectItem value="29">
                                        Dirección de Apoyos Sociales (Becas,
                                        Utiles y Uniformes)
                                    </SelectItem>
                                    <SelectItem value="30">
                                        Participación Social
                                    </SelectItem>
                                    <SelectItem value="31">
                                        Programas Compensatorios y de Apoyo
                                    </SelectItem>
                                    <SelectItem value="32">
                                        Dirección Operativa y Ejecución de
                                        Programas
                                    </SelectItem>
                                    <SelectItem value="33">
                                        Dirección de Enlace Sectorial
                                    </SelectItem>
                                    <SelectItem value="34">
                                        Apoyo al Transporte para Grupos
                                        Prioritarios
                                    </SelectItem>
                                    <SelectItem value="35">
                                        Dirección General de Desarrollo de
                                        Programas Sociales
                                    </SelectItem>
                                    <SelectItem value="36">Colmenas</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </form>
                <SheetFooter>
                    <Button type="submit">Guardar</Button>
                    <SheetClose asChild>
                        <Button variant="outline">Cerrar</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
}
