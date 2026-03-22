// js/data.js
const servicesData = [
  {
    "id": "academico",
    "title": "ACADÉMICO",
    "identifierPrefix": "A",
    "items": [
      {
        "id": "A1",
        "title": "Calendarios Escolares",
        "summary": "Fechas del ciclo escolar: periodos de clases, evaluaciones, exámenes extraordinarios, vacaciones y asuetos.",
        "detailedInfo": {
          "atomicId": "A1",
          "icon": "📅",
          "requirements": ["Ninguno (Consulta pública)."],
          "steps": [
            "Haz clic en el botón para abrir el documento oficial.",
            "Verifica las fechas vigentes para el ciclo escolar actual.",
            "Descarga el PDF si necesitas tenerlo a mano."
          ],
          "actions": [
            {
              "type": "redirect",
              "text": "Ver en Google Drive",
              "url": "https://drive.google.com/file/d/1uq6qrWAOdm6v1OUngJ92Einff0og9JfM/view?usp=sharing"
            },
            {
              "type": "download",
              "text": "Descargar Calendario (PDF)",
              "url": "./assets/descargas/Calendario Anual_ENP_2025-2026.pdf"
            }
          ]
        }
      },
      {
        "id": "A2",
        "title": "Horarios de Clase",
        "summary": "Consulta los horarios por grupo o profesor. Sujetos a cambios sin previo aviso.",
        "detailedInfo": {
          "atomicId": "A2",
          "icon": "⏰",
          "requirements": [
            "Conocer tu grupo asignado o el nombre completo de tu profesor.",
            "Considerar que los horarios están sujetos a revisión y pueden cambiar en cualquier momento sin previo aviso."
          ],
          "steps": [
            "Haz clic en el botón para acceder al portal de horarios de la ENP 8.",
            'En la barra superior, utiliza los menús desplegables para buscar "Horario por Profesor" o "Horario por Grupo".',
            "Selecciona la opción deseada para visualizar el horario en pantalla (incluye opción para imprimir)."
          ],
          "actionType": "redirect",
          "actionText": "Consultar Horarios",
          "actionUrl": "http://prepa8.unam.mx/horarios/horarios.php"
        }
      },
      {
        "id": "A3",
        "title": "Consulta de Calificaciones",
        "summary": "Revisa tus calificaciones parciales, historial académico (SIAE) y resultados de extraordinarios.",
        "detailedInfo": {
          "atomicId": "A3",
          "icon": "📊",
          "requirements": [
            "Tener a la mano tu número de cuenta.",
            "Contar con tu fecha de nacimiento o contraseña creada previamente (en el portal SIAE es posible cambiar la contraseña por defecto)."
          ],
          "steps": [
            "Identifica el tipo de consulta que requieres y haz clic en su botón correspondiente.",
            "Parciales: Ingresa para visualizar tus evaluaciones por asignatura en el ciclo escolar.",
            "Historia Académica (SIAE): Digita tus credenciales para revisar tu promedio oficial global.",
            "Extraordinarios: Al entrar a la página, elige \"Extraordinarios\" e ingresa tus datos. También puedes buscar la opción \"Revisiones extraordinarios\" en el menú tras iniciar sesión."
          ],
          "actionType": "none",
          "actions": [
            {
              "type": "redirect",
              "text": "Calificaciones Parciales",
              "url": "http://prepa8.unam.mx/p8a/parciales/consulta_parciales.html"
            },
            {
              "type": "redirect",
              "text": "Historia Académica (SIAE)",
              "url": "https://www.dgae-siae.unam.mx/www_gate.php"
            },
            {
              "type": "redirect",
              "text": "Resultados de Extraordinarios",
              "url": "http://contacto.enp.unam.mx/"
            }
          ]
        }
      },
      {
        "id": "A4",
        "title": "Consulta de Comprobante de Inscripción",
        "summary": "Documento que avala que estás inscrito en el ciclo escolar actual.",
        "detailedInfo": {
          "atomicId": "A4",
          "icon": "📄",
          "requirements": [
            "Conocer tu situación académica actual (Nuevo ingreso, 5to, 6to, recursador o con suspensión de estudios)."
          ],
          "steps": [
            "Identifica tu situación académica en las opciones inferiores.",
            "Haz clic en el botón que te corresponda para acceder al portal de consulta e ingresa tus datos."
          ],
          "actionType": "none",
          "actions": [
            {
              "type": "redirect",
              "text": "Nuevo Ingreso",
              "url": "http://prepa8.unam.mx/p8a/pi2026/pi_defaultInscripcion.php"
            },
            {
              "type": "redirect",
              "text": "Estudiantes de 5to, 6to, Recursadores y Suspensión",
              "url": "http://prepa8.unam.mx/p8a/insc2026/defaultInscripcion.php"
            }
          ]
        }
      },
      {
        "id": "A5",
        "title": "Planes y Programas de Estudio",
        "summary": "Información detallada sobre las asignaturas y créditos correspondientes a tu bachillerato.",
        "detailedInfo": {
          "atomicId": "A5",
          "icon": "📚",
          "requirements": [
            "Ninguno (Consulta pública)."
          ],
          "steps": [
            "Haz clic en el botón para dirigirte al portal oficial de \"Acerca de la ENP\".",
            "La página te ubicará de inmediato en el apartado \"Planes y Programas de Estudio\".",
            "Usa el menú lateral para seleccionar el año que consultas (4to, 5to, 6to) y visualizar los programas, diagnósticos y asignaturas vigentes."
          ],
          "actionType": "redirect",
          "actionText": "Planes y Programas de la ENP",
          "actionUrl": "http://enp.unam.mx/acercade/#planes"
        }
      },
      {
        "id": "A6",
        "title": "Seriación de Bachillerato",
        "summary": "Consulta los diagramas de seriación de asignaturas generales y las secuencias de idiomas.",
        "detailedInfo": {
          "atomicId": "A6",
          "icon": "🔗",
          "requirements": [
            "Conocer las materias que cursas actualmente."
          ],
          "steps": [
            "Para materias generales: Selecciona \"Seriación de Asignaturas\" para ver los requisitos previos de cada materia.",
            "Para idiomas: Acude a \"Secuencia de Idiomas\" para conocer tu ruta de acuerdo al idioma con el que iniciaste.",
            "Visualiza o descarga el diagrama en PDF según necesites."
          ],
          "actionType": "none",
          "actions": [
            {
              "type": "redirect",
              "text": "Seriación de Asignaturas",
              "url": "https://drive.google.com/file/d/1io8zHdRyAfAG6H7RFcMHww-uIEE6LQV3/view?usp=sharing"
            },
            {
              "type": "redirect",
              "text": "Secuencia de Idiomas",
              "url": "https://drive.google.com/file/d/1BgbdCpxP28_8qVEJsJoC7XYPhfr6NRo4/view?usp=sharing"
            }
          ]
        }
      },
      {
        "id": "A7",
        "title": "Inscripciones a Actividades Estéticas",
        "summary": "Sistema de registro para los talleres artísticos y culturales obligatorios del plantel.",
        "detailedInfo": {
          "atomicId": "A7",
          "icon": "🎭",
          "requirements": [
            "Es un requisito obligatorio cursar y aprobar una actividad estética en 4to, 5to y 6to año para poder tramitar tu certificado.",
            "Deberás realizar tu inscripción a principios del ciclo escolar de acuerdo con las fechas oficiales."
          ],
          "steps": [
            "Conoce las actividades: Visita el portal para informarte sobre disciplinas (Teatro, Pintura, Fotografía, etc.), profesores, salones y horarios.",
            "Completa tu inscripción: Registra tu solicitud en el sistema cuando inicie el periodo de inscripción.",
            "Preséntate a la clase: Es indispensable que asistas físicamente con el profesor en los horarios elegidos para asegurar tu lugar.",
            "Verifica tu inscripción: Al final, confirma que fuiste aceptado oficialmente en la lista de la clase."
          ],
          "actionType": "redirect",
          "actionText": "Portal de Actividades Estéticas",
          "actionUrl": "http://sistemasp8.enp.unam.mx/esteticas/"
        }
      }
    ]
  },
  {
    "id": "identidad",
    "title": "IDENTIDAD",
    "identifierPrefix": "I",
    "items": [
      {
        "id": "I1",
        "title": "Constancia de Estudios",
        "summary": "Documento oficial para acreditar que eres estudiante vigente.",
        "detailedInfo": {
          "atomicId": "I1",
          "icon": "📄",
          "requirements": [
            "Estar inscrito durante el ciclo escolar actual y asegurarse de que aún no haya concluido.",
            "Presentarse con credencial vigente."
          ],
          "steps": [
            "Acude a la ventanilla correspondiente durante los horarios establecidos para tu turno.",
            "Solicita la expedición de tu constancia de estudios presentando tu credencial al trabajador de la ventanilla.",
            "Recomendación: Esta constancia te servirá para trámites externos como Becas, Pasaporte o Visa, Alta en el IMSS (Seguro Estudiantil) y trámite del INE."
          ],
          "actionType": "none",
          "actionText": "Trámite presencial en ventanilla de Servicios Escolares"
        }
      },
      {
        "id": "I2",
        "title": "Constancia Credencial del Plantel",
        "summary": "Documento provisional que funge como identificación para ingresar al plantel si extraviaste tu credencial.",
        "detailedInfo": {
          "atomicId": "I2",
          "icon": "🪪",
          "requirements": [
            "Ser estudiante inscrito durante el ciclo escolar actual.",
            "Haber extraviado tu credencial del plantel.",
            "Asegurarse de que el ciclo escolar aún no haya concluido."
          ],
          "steps": [
            "Acude a la ventanilla correspondiente de Servicios Escolares dentro de los horarios establecidos para tu turno.",
            "Solicita la Constancia Credencial indicando el extravío de tu credencial original.",
            "Utilízala como identificación válida y provisional para poder ingresar libremente al plantel."
          ],
          "actionType": "none",
          "actionText": "Trámite presencial en ventanilla de Servicios Escolares"
        }
      },
      {
        "id": "I3",
        "title": "Reposición Credencial de la UNAM",
        "summary": "Procedimiento oficial para recuperar tu credencial universitaria por robo o extravío.",
        "detailedInfo": {
          "atomicId": "I3",
          "icon": "💳",
          "requirements": [
            "Comprobante de pago por reposición.",
            "Acta de robo o extravío ante un juez cívico."
          ],
          "steps": [
            "Realiza el pago por reposición de credencial en las cajas de Rectoría.",
            "Levanta el acta por robo o extravío de documento (credencial de la UNAM) ante el juez cívico en la fiscalía más cercana.",
            "Acude y entrega ambos comprobantes en la ventanilla de Servicios Escolares de tu plantel.",
            "Recoge tu nueva credencial un día hábil después de haber entregado los documentos."
          ],
          "actionType": "none",
          "actionText": "Trámite presencial en Rectoría (pagos) y Servicios Escolares (entrega)"
        }
      },
      {
        "id": "I4",
        "title": "Solicitud de Certificado de Bachillerato",
        "summary": "Requisitos y formato oficial para solicitar tu certificado de estudios al concluir la preparatoria.",
        "detailedInfo": {
          "atomicId": "I4",
          "icon": "🎓",
          "requirements": [
            "Ficha de trámite y comprobante de pago bancario (se genera en https://sigerel.dgae.unam.mx/alumnos/login).",
            "Dos (2) fotografías de estudio recientes, tamaño credencial ovaladas (5x3.5 cm), frente, sin lentes.",
            "Identificación oficial vigente o credencial escolar vigente.",
            "Descargar y llenar con letra clara el formato de Solicitud (disponible en el botón inferior)."
          ],
          "steps": [
            "Ingresa a SIGEREL con tu número de cuenta (sin guion) y NIP del SIAE para generar e imprimir tu Ficha de pago, y acude al banco.",
            "Entregar recibo, fotos y solicitud llenada a la URE (Adolfo Prieto 722, Col. Del Valle). Mismo lugar para resolver dudas.",
            "Horarios de ventanilla: L-J de 9:00 a 14:50 y 15:30 a 18:30 hrs. Viernes de 9:00 a 14:50 y 15:30 a 18:00 hrs.",
            "Dudas o revisión de avances: Teléfonos DGENP (55-5687-6828, 55-5687-6838, 55-5687-6848) marcando la extensión 1819 (Plantel 8).",
            "TRAMITEL: Si resides en el interior o extranjero, solicita tu certificado íntegro contactando a <a href='mailto:tramitel@dgae.unam.mx' style='color: #2563eb; text-decoration: underline;'>tramitel@dgae.unam.mx</a>"
          ],
          "actionType": "download",
          "actionText": "Descargar Formato en PDF",
          "actionUrl": "assets/descargas/SOLICITUD DE CERTIFICADO_2025.pdf"
        }
      },
      {
        "id": "I5",
        "title": "Pase Reglamentado",
        "summary": "Cronograma y documentos del procedimiento para tu ingreso a nivel Licenciatura desde la prepa.",
        "detailedInfo": {
          "atomicId": "I5",
          "icon": "📝",
          "requirements": [
            "Concluir tu bachillerato en los tiempos establecidos y cumplir con el promedio estipulado.",
            "Estar al pendiente de la publicación de la Convocatoria en la Gaceta UNAM y la DGAE."
          ],
          "steps": [
            "19 de marzo: Publicación de la Convocatoria en la DGAE.",
            "Del 6 al 15 de abril: Ingresa al portal de la DGAE para realizar tu examen de inglés, evaluación estadística, registrar tu solicitud de Pase y descargar tu comprobante de registro impreso.",
            "Del 24 al 30 de abril: Acude presencialmente a tu cita para captura de fotografía, firma y huella digital.",
            "Del 27 de abril al 17 de junio: Revisa tu historia académica en el SIAE. El 21 de julio es la entrega de resultados.",
            "Del 21 al 31 de julio: Obtén tus documentos de ingreso a licenciatura vía internet en el portal oficial."
          ],
          "actions": [
            {
              "type": "redirect",
              "text": "¿Qué onda con el pase reglamentado?",
              "url": "https://drive.google.com/file/d/1WjBv4Ry92h6wP9e-gl3gZNzOzSxcYzVe/view?usp=sharing"
            },
            {
              "type": "redirect",
              "text": "Convocatoria Pase Reglamentado (19 de marzo 2026)",
              "url": "https://drive.google.com/file/d/1YsTv0PfGrhB_qR8ZG005X8yqC6TQxLHA/view"
            },
            {
              "type": "redirect",
              "text": "Tríptico con información (19 de marzo 2026)",
              "url": "https://drive.google.com/file/d/1AMsOPexflHgjYjIbr5H8I8wghjRtyL72/view"
            }
          ]
        }
      },
      {
        "id": "I6",
        "title": "Validación de Certificado de Bachillerato",
        "summary": "Legalización y certificación de la autenticidad de tu documento original emitido.",
        "detailedInfo": {
          "atomicId": "I6",
          "icon": "✅",
          "requirements": [
            "Documento a certificar presentándolo en ORIGINAL.",
            "Copia fotostática tamaño carta en blanco y negro del documento.",
            "Identificación oficial vigente con fotografía.",
            "Realizar el pago de derechos correspondiente por cada documento solicitado al momento de tu trámite."
          ],
          "steps": [
            "Acudir presencialmente a la Dirección de Certificación (Circuito de la Investigación Científica S/N, C.U. Coyoacán, CDMX. Cerca del metro CU y casi frente a Fac. de Veterinaria).",
            "Horario de atención general: Lunes a viernes de 09:00 a 15:00 hrs y de 17:00 a 18:00 hrs.",
            "El tiempo para emitir la certificación de los documentos será de 2 a 5 días hábiles.",
            "¿Convenio Institucional?: Para validar documentación solicitada mediante convenio institucional, deberás enviar un correo a <a href='mailto:validaciondocumentos@dgae.unam.mx' style='color: #2563eb; text-decoration: underline;'>validaciondocumentos@dgae.unam.mx</a>"
          ],
          "actionType": "redirect",
          "actionText": "Más información (Trámites DGAE)",
          "actionUrl": "https://www.dgae.unam.mx/tramites/index.html"
        }
      },
      {
        "id": "I7",
        "title": "Recuperación de NIP de página DGAE",
        "summary": "Trámite presencial para recuperar tu clave de acceso a los servicios escolares universales de la UNAM.",
        "detailedInfo": {
          "atomicId": "I7",
          "icon": "🔑",
          "requirements": [
            "Ser el titular de la cuenta o presentarse con identificación oficial y/o credencial vigente del plantel."
          ],
          "steps": [
            "Acudir directamente de manera presencial a la Jefatura de Servicios Escolares del plantel.",
            "Realizar tu solicitud únicamente durante los horarios establecidos para tu turno escolar."
          ],
          "actionType": "none",
          "actionText": "Trámite presencial en la Jefatura de Servicios Escolares"
        }
      },
      {
        "id": "I8",
        "title": "Apostilla de Documentos Nacionales",
        "summary": "Certificación de las firmas de los servidores públicos federales. Hace constar la validez de tus documentos nacionales.",
        "detailedInfo": {
          "atomicId": "I8",
          "icon": "📜",
          "requirements": [
            "Documento original a apostillar con firma autógrafa del servidor público federal.",
            "Comprobante original de pago de derechos.",
            "Copia simple de la CURP y de alguna identificación oficial (INE, Cédula, Cartilla o Pasaporte).",
            "Para foráneos: Escrito libre y guía prepagada con servicio de recolección de mensajería."
          ],
          "steps": [
            "Autenticación PREVIA: Antes de apostillar documentos (como planes o diplomas), requieres autenticar las firmas en la Dirección de Certificación (DGAE). (No aplica a certificados originales).",
            "Costos: Descarga la hoja de ayuda para pago de derechos en la página oficial (dicoppu.segob.gob.mx) y realiza tu pago en ventanilla bancaria.",
            "Trámite presencial: Acude de lunes a viernes (09:00 a 13:00 hrs) a Río Amazonas Número 62, planta baja, Col. Cuauhtémoc, CDMX.",
            "Si no vives en la CDMX: Deberás mandar un escrito libre por mensajería cumpliendo puntualmente con los datos que marca la infografía adjunta."
          ],
          "actionType": "redirect",
          "actionText": "Infografía de Apostilla Nacional",
          "actionUrl": "https://drive.google.com/file/d/1dyLSgWamt5ujTN5NxTH9LzjeF-qaSYi_/view?usp=sharing"
        }
      },
      {
        "id": "I9",
        "title": "Apostilla de Documentos Internacionales",
        "summary": "Certificación de firmas y sellos en documentos extranjeros (no certifica validez de contenido ni implica revalidación de estudios).",
        "detailedInfo": {
          "atomicId": "I9",
          "icon": "🌎",
          "requirements": [
            "Depende del país emisor, pero generalmente requiere presentar el documento original y pagar el servicio correspondiente.",
            "Se recomienda apostillar: Historia académica, Certificado de estudios, Título o grado, y Plan de estudios de asignaturas."
          ],
          "steps": [
            "Importante: Los documentos académicos primero deben ser legalizados en la misma Institución extranjera que los emite.",
            "El trámite de apostilla ÚNICAMENTE puede llevarse a cabo en el país donde el documento fue expedido (generalmente a través de sus Secretarías de Estado).",
            "¡Asesórate y realiza este trámite PREVIO a tu regreso a México! Las normativas varían según el país y no podrás apostillarlos una vez en territorio mexicano."
          ],
          "actionType": "redirect",
          "actionText": "Infografía de Apostilla Internacional",
          "actionUrl": "https://drive.google.com/file/d/1at-DtClfE5kcfEwWo2R4kl8ehqEsLhDU/view?usp=sharing"
        }
      }
    ]
  },
  {
    "id": "digital",
    "title": "DIGITAL",
    "identifierPrefix": "D",
    "items": [
      {
        "id": "D1",
        "title": "Correo Institucional",
        "summary": "Ingreso y recuperación de contraseña de tu cuenta @alumno.enp.unam.mx",
        "detailedInfo": {
          "atomicId": "D1",
          "icon": "📧",
          "requirements": [
            "Conocer tu número de cuenta de 9 dígitos.",
            "De ser tu primera vez o tras una recuperación, usar tu fecha de nacimiento (DDMMAAAA) como contraseña temporal."
          ],
          "steps": [
            "Ingreso: Ingresa desde la página, donde por defecto ya aparece el dominio @alumno.enp.unam.mx, por lo que solo debes ingresar tus 9 dígitos del número de cuenta.",
            "Crear contraseña: La primera vez que ingresas con la contraseña temporal, se te pedirá generar una contraseña que será la definitiva.",
            "Recuperación: Acude a las ventanillas de servicios escolares para solicitar la recuperación y espera de 1 a 3 días hábiles para ingresar nuevamente con tu contraseña temporal (DDMMAAAA)."
          ],
          "actionType": "redirect",
          "actionText": "Ir al Correo Institucional",
          "actionUrl": "https://mail.google.com/a/alumno.enp.unam.mx"
        }
      },
      {
        "id": "D2",
        "title": "Catálogo Bibliotecario",
        "summary": "Busca y consulta libros en la biblioteca \"Raúl Pous Ortíz\" o en toda la UNAM y accede a libros electrónicos.",
        "detailedInfo": {
          "atomicId": "D2",
          "icon": "📖",
          "requirements": [
            "Ninguno (Consulta pública)."
          ],
          "steps": [
            "Haz clic en el botón para dirigirte al portal oficial de la Biblioteca \"Raúl Pous Ortíz\".",
            "Utiliza los buscadores centrales para localizar colecciones físicas directamente en el plantel o busca en el catálogo integral para toda la UNAM (por palabra clave, autor o tema).",
            "Aprovecha los enlaces rápidos para acceder a \"Libros electrónicos para la comunidad del Bachillerato UNAM\", botón de \"Acceso remoto\" y \"Reglamento de la Biblioteca\"."
          ],
          "actionType": "redirect",
          "actionText": "Catálogo Bibliotecario",
          "actionUrl": "https://enp8.bibliotecas.unam.mx/"
        }
      },
      {
        "id": "D3",
        "title": "Descargas",
        "summary": "Repositorio de archivos de profesores, logotipos institucionales, software y fondos de pantalla.",
        "detailedInfo": {
          "atomicId": "D3",
          "icon": "⬇️",
          "requirements": [
            "Conocer el nombre del profesor para buscar sus archivos (si aplica)."
          ],
          "steps": [
            "Archivos de profesores: Despliega la lista y haz clic en el nombre de tu profesor para ver y descargar sus materiales.",
            "Recursos del plantel: Navega entre las diferentes pestañas para descargar \"Software Libre\", \"Software de Seguridad\" o \"Fondos de pantalla\".",
            "Logotipos: Si descargas logotipos (ENP 8, Pumas, UNAM), respeta rigurosamente sus lineamientos de uso (no alterarlos y situarlos sobre fondos permitidos)."
          ],
          "actionType": "redirect",
          "actionText": "Ir a Descargas",
          "actionUrl": "http://prepa8.unam.mx/p8/descargas"
        }
      },
      {
        "id": "D4",
        "title": "Red Universitaria de Aprendizaje (RUA)",
        "summary": "Plataforma de la UNAM con recursos educativos libres y gratuitos asociados a los planes de estudio.",
        "detailedInfo": {
          "atomicId": "D4",
          "icon": "🌐",
          "requirements": [
            "Ninguno (Plataforma libre y gratuita de la UNAM)."
          ],
          "steps": [
            "Ingresa al portal y utiliza la \"Búsqueda por asignaturas\" para encontrar material de apoyo para tus materias.",
            "Explora colecciones de \"Recursos Informativos\" evaluados por comités externos, o \"Herramientas para hacer y aprender\".",
            "Aprovecha las propuestas didácticas completas, sistemas web y móviles para enriquecer tu aprendizaje sobre temáticas complejas de bachillerato."
          ],
          "actionType": "redirect",
          "actionText": "Ir a la RUA",
          "actionUrl": "https://www.rua.unam.mx/"
        }
      },
      {
        "id": "D5",
        "title": "Red Inalámbrica Universitaria (RIU)",
        "summary": "Servicio gratuito de conexión inalámbrica a Internet exclusivo para la comunidad universitaria en instalaciones de la UNAM.",
        "detailedInfo": {
          "atomicId": "D5",
          "icon": "📶",
          "requirements": [
            "Ser estudiante o trabajador en activo de la UNAM.",
            "Contar con una cuenta de correo electrónico de algún dominio de la UNAM (@comunidad.unam.mx, @unam.mx, @alumno.enp.unam.mx, etc.).",
            "Dispositivo con tarjeta Wi-Fi que soporte cifrado WPA o WPA2-Enterprise."
          ],
          "steps": [
            "Solicita tu cuenta: Si eres alumno de nuevo ingreso o no tienes cuenta, regístrate en el portal de Servicio RIU.",
            "Configura tu equipo: Sigue la guía específica según tu sistema operativo (Windows, macOS, Linux, Android o iPhone) para realizar la conexión de manera segura.",
            "Utiliza el servicio: Una vez configurado, podrás navegar en las zonas de cobertura del plantel de forma gratuita e intransferible."
          ],
          "actions": [
            {
              "type": "redirect",
              "text": "Alta o Recuperación de Contraseña",
              "url": "https://www.servicioriu.unam.mx/"
            },
            {
              "type": "redirect",
              "text": "Guía de Conexión de Dispositivos",
              "url": "https://www.riu.unam.mx/conecte-su-equipo/"
            },
            {
              "type": "redirect",
              "text": "Cobertura e Información General",
              "url": "https://www.riu.unam.mx/"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "apoyos",
    "title": "APOYOS",
    "identifierPrefix": "B",
    "items": [
      {
        "id": "B1",
        "title": "Beca Universal Benito Juárez",
        "summary": "Información, listados y formatos para realizar el trámite de Orden de Pago (ODP).",
        "detailedInfo": {
          "atomicId": "B1",
          "icon": "💵",
          "requirements": [
            "Tu nombre debe aparecer en el listado oficial publicado. SI NO APARECES, NO PODRÁS PRESENTARTE.",
            "Llevar los formatos impresos en original y dos copias (por si te llegas a equivocar en el llenado)."
          ],
          "steps": [
            "Revisa el listado publicado en la página para ver si aparece tu nombre y puedes realizar tu trámite de Orden de Pago (ODP).",
            "Consulta la sede específica a la que tienes que asistir para realizar tu trámite.",
            "Si apareces en el listado, descarga la carpeta comprimida de documentos, imprímelos y acude a la sede."
          ],
          "actionType": "redirect",
          "actionText": "Consultar Listado y Formatos",
          "actionUrl": "http://prepa8.unam.mx/p8/alumnos/becas/benito_juarez"
        }
      },
      {
        "id": "B2",
        "title": "Asesorías Permanentes y de Extraordinarios",
        "summary": "Consulta los horarios, salones y contactos para tomar asesorías de tus materias en este ciclo escolar.",
        "detailedInfo": {
          "atomicId": "B2",
          "icon": "👨‍🏫",
          "requirements": [
            "Identificar la asignatura específica en la que requieres apoyo.",
            "Revisar dentro del documento si el profesor de tu elección requiere que agendes cita escribiéndole por correo previamente."
          ],
          "steps": [
            "Haz clic en el botón para abrir el documento oficial de \"Asesorías Permanentes\".",
            "Busca la materia y el profesor de tu elección en las diferentes tablas.",
            "Acude al salón indicado en el horario correspondiente o envía un correo electrónico si así se solicita."
          ],
          "actionType": "redirect",
          "actionText": "Asesorías",
          "actionUrl": "https://docs.google.com/document/d/1mv64dGS6_adyii5KGC4BfyqFwJUfFzm5/edit?usp=sharing&ouid=107969615639508392494&rtpof=true&sd=true"
        }
      },
      {
        "id": "B3",
        "title": "Alta/Baja del Seguro IMSS Estudiantil",
        "summary": "Procedimientos oficiales para solicitar tu alta de seguro o suspenderlo, así como consulta de vigencia.",
        "detailedInfo": {
          "atomicId": "B3",
          "icon": "🏥",
          "requirements": [
            "Para ALTA o BAJA se solicitan en general: Credencias del alumno y del tutor identificando, CURP, y Acta de Nacimiento.",
            "Para ALTA: Se requiere Solicitud elaborada a mano por el estudiante/tutor y Hoja de vigencia del IMSS con estatus \"BAJA\".",
            "Para BAJA: Se requiere el Formato oficial de Baja y su Hoja de vigencia del IMSS con estatus \"VIGENTE\"."
          ],
          "steps": [
            "Procedimiento de ALTA: Envía un solo correo electrónico a <a href='mailto:escolares.p8@enp.unam.mx' style='color: #2563eb; text-decoration: underline;'>escolares.p8@enp.unam.mx</a> adjuntando los requisitos marcados con tu hoja vigente inactiva.",
            "Procedimiento de BAJA: Asiste presencialmente y entrega en la ventanilla de Servicios Escolares los requisitos requeridos con tu hoja activa.",
            "Utiliza el primer botón para generar la \"Hoja de Vigencia de Derechos\" necesaria para ambos trámites.",
            "Utiliza los enlaces 2 y 3 para acceder al Formato exclusivo de Baja, o consultar el folleto digital."
          ],
          "actions": [
            {
              "type": "redirect",
              "text": "1. Consultar Hoja de Vigencia (IMSS)",
              "url": "https://serviciosdigitales.imss.gob.mx/gestionAsegurados-web-externo/vigencia/"
            },
            {
              "type": "redirect",
              "text": "2. Bajar Formato de BAJA",
              "url": "https://drive.google.com/file/d/1xixmz7hNKKJoP0gVfWWEjYc4sxDdLbnN/view?usp=sharing"
            },
            {
              "type": "redirect",
              "text": "3. Ver Folleto Informativo",
              "url": "https://drive.google.com/file/d/1nOtpEZh05Uo5J_bMM3bMCqsWcTb6Gt4J/view"
            }
          ]
        }
      },
      {
        "id": "B4",
        "title": "Mediateca",
        "summary": "Centro de autoacceso para estudiar idiomas, tomar talleres y usar recursos digitales o impresos.",
        "detailedInfo": {
          "atomicId": "B4",
          "icon": "🎧",
          "requirements": [
            "Ser alumno inscrito en el Plantel 8.",
            "Asistir con tu credencial vigente.",
            "Traer cuaderno de bitácora exclusivo para la asignatura, libro de texto y material de trabajo a la mano."
          ],
          "steps": [
            "Conoce el horario: Acude de Lunes a Viernes de 9:30 a 19:30 hrs.",
            "Visita la página web para explorar la oferta de Talleres (Conversación, Diseño, Cultura, Gramática y Aprender a Aprender).",
            "Consulta los servicios disponibles: espacios Multimedia, préstamo de Materiales y Prácticas EIS."
          ],
          "actionType": "redirect",
          "actionText": "Portal de la Mediateca",
          "actionUrl": "https://www.mediateca.prepa8.unam.mx/"
        }
      }
    ]
  },
  {
    "id": "gestion",
    "title": "GESTIÓN",
    "identifierPrefix": "G",
    "items": [
      {
        "id": "G1",
        "title": "Justificante de Inasistencia",
        "summary": "Trámite por inasistencias de un periodo menor a 10 días al plantel.",
        "detailedInfo": {
          "atomicId": "G1",
          "icon": "📋",
          "requirements": [
            "Ser estudiante inscrito en el ciclo escolar actual.",
            "Haberte ausentado por un periodo menor de 10 días al plantel.",
            "Asegurarte de que el ciclo escolar aún no haya concluido."
          ],
          "steps": [
            "Acude a la ventanilla correspondiente de Servicios Escolares durante los horarios establecidos para tu turno.",
            "Solicita formalmente la emisión del justificante de inasistencia.",
            "IMPORTANTE: El alumno que falsifique documentos, boletas o actas (o se aproveche de falsificación por terceros) será expulsado de la Universidad, según el Estatuto General de la UNAM, Art. 97, fracción IV."
          ],
          "actionType": "none",
          "actionText": "Trámite presencial en ventanilla de Servicios Escolares"
        }
      },
      {
        "id": "G2",
        "title": "Baja Definitiva de la UNAM",
        "summary": "¿Cómo solicitar la baja definitiva de la UNAM?",
        "detailedInfo": {
          "atomicId": "G2",
          "icon": "🚪",
          "requirements": [
            "Identificación oficial."
          ],
          "steps": [
            "Se hace de su conocimiento que NO hay bajas definitivas en la UNAM.",
            "En caso de que desee recuperar su documentación que entregó al ingresar a la UNAM, deberá dirigirse al Local de Aspirantes en Avenida del Imán #7.",
            "Ahí le informarán el procedimiento para recuperar dicha documentación y así poder continuar los estudios de bachillerato en otra institución."
          ],
          "actionType": "none",
          "actionText": "El trámite es estrictamente presencial en Avenida del Imán #7."
        }
      },
      {
        "id": "G3",
        "title": "Justificante por Periodo Extendido o Aviso de Condición",
        "summary": "Para estudiantes que posean algún padecimiento o deban ausentarse por más de 10 días al plantel.",
        "detailedInfo": {
          "atomicId": "G3",
          "icon": "⏳",
          "requirements": [
            "Padecer alguna condición médica o requerir una ausencia de más de 10 días."
          ],
          "steps": [
            "Un familiar del estudiante deberá dirigirse a la secretaría de Servicios Escolares para informar sobre la situación del alumno.",
            "Esto permitirá extender una notificación oficial a sus docentes a través de correo electrónico.",
            "De esta manera, el estudiante podrá recibir el apoyo académico necesario durante su ausencia."
          ],
          "actionType": "none",
          "actionText": "Un familiar debe notificar presencialmente a Servicios Escolares"
        }
      },
      {
        "id": "G4",
        "title": "Suspensión Temporal de Estudios",
        "summary": "Procedimiento oficial del Art. 23 para suspender tus estudios justificadamente por un ciclo escolar.",
        "detailedInfo": {
          "atomicId": "G4",
          "icon": "🛑",
          "requirements": [
            "Solicitud en línea firmada (usar cuenta y fecha DDMMAAAA en el portal de contacto).",
            "Constancia de historial académico de la DGAE (exento en nuevo ingreso).",
            "Comprobante de inscripción y calificaciones parciales (si aplica).",
            "Copia de credencial de alumno e identificación del padre/tutor (INE/Pasaporte).",
            "Carta de exposición de motivos firmada y documentos probatorios médicos o legales (menores a 30 días)."
          ],
          "steps": [
            "Reúne estrictamente todos los requisitos documentales solicitados.",
            "Preséntate directamente en las ventanillas de Servicios Escolares de 9:00 a 13:00 hrs o de 17:00 a 20:00 hrs.",
            "Recuerda que la resolución demorará aproximadamente 30 días avalada por la DGENP.",
            "IMPORTANTE: Sujetarse a dictamen. Si es aceptada, las evaluaciones ordinarias o extraordinarias del periodo de suspensión quedarán anuladas."
          ],
          "actionType": "redirect",
          "actionText": "Descargar Documento Completo",
          "actionUrl": "https://drive.google.com/file/d/1svf7HO3Xwv_CWbWFt2JIYGv2-Q8M2bHG/view?usp=sharing"
        }
      },
      {
        "id": "G5",
        "title": "Registro de Exámenes Extraordinarios",
        "summary": "Consulta las fechas en el calendario e ingresa al sistema SIEEL para inscribir tus materias.",
        "detailedInfo": {
          "atomicId": "G5",
          "icon": "📆",
          "requirements": [
            "Revisar previamente las fechas oficiales en el Calendario de Exámenes Extraordinarios."
          ],
          "steps": [
            "Primero, utiliza el primer botón para consultar el Calendario y asegurar que las fechas de registro estén vigentes.",
            "Si el registro está abierto, utiliza el segundo botón para ingresar al portal del SIEEL y completar tu registro."
          ],
          "actions": [
            {
              "type": "redirect",
              "text": "1. Ver Calendario de Exámenes",
              "url": "https://drive.google.com/file/d/1uq6qrWAOdm6v1OUngJ92Einff0og9JfM/view?usp=sharing"
            },
            {
              "type": "redirect",
              "text": "2. Portal de Registro (SIEEL)",
              "url": "https://sieel.enp.unam.mx/"
            }
          ]
        }
      },
      {
        "id": "G6",
        "title": "Lineamientos de Acceso al Plantel",
        "summary": "Reglas y protocolos para el ingreso peatonal, uso de credencial, visitantes y estacionamiento en el Plantel 8.",
        "detailedInfo": {
          "atomicId": "G6",
          "icon": "🏫",
          "requirements": [
            "Alumnos: Mostrar credencial local o de la UNAM vigente para ingresar.",
            "Padres y visitantes: Presentar identificación oficial, registrarse en bitácora y portar gafete."
          ],
          "steps": [
            "Conoce el horario: El acceso peatonal se permite de 6:45 a 20:45 horas, de lunes a viernes.",
            "Evita objetos prohibidos: No se permite introducir pelotas, mascotas, patinetas, patines, objetos punzocortantes, o bocinas.",
            "¿Olvidaste tu credencial?: Deberás registrarte en la bitácora en la entrada (límite máximo de 3 registros por ciclo escolar).",
            "Para conocer a detalle los estatutos completos y reglas del estacionamiento, haz clic en el botón inferior."
          ],
          "actionType": "redirect",
          "actionText": "Lineamientos Completos",
          "actionUrl": "https://drive.google.com/file/d/1Dlh9PkX2hD0f1XQiuxs3q177pDq1prY4/view"
        }
      }
    ]
  }
];
