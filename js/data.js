// js/data.js
const servicesData = [
  {
    "id": "alumnos",
    "title": "Alumnos",
    "identifierPrefix": "AL",
    "items": [
      {
        "id": "AL1",
        "title": "Consulta de Calificaciones",
        "summary": "Revisa tus calificaciones parciales, historial académico (SIAE) y resultados de extraordinarios.",
        "detailedInfo": {
          "atomicId": "AL1",
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
        "id": "AL2",
        "title": "Consulta de Comprobante de Inscripción",
        "summary": "Documento que avala que estás inscrito en el ciclo escolar actual.",
        "detailedInfo": {
          "atomicId": "AL2",
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
        "id": "AL3",
        "title": "Baja Definitiva de la UNAM",
        "summary": "¿Cómo solicitar la recuperación de documentos por baja definitiva?",
        "detailedInfo": {
          "atomicId": "AL3",
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
      }
    ]
  },
  {
    "id": "apoyo",
    "title": "Apoyo",
    "identifierPrefix": "AP",
    "items": [
      {
        "id": "AP1",
        "title": "Asesorías Permanentes y de Extraordinarios",
        "summary": "Consulta los horarios, salones y contactos para tomar asesorías de tus materias.",
        "detailedInfo": {
          "atomicId": "AP1",
          "icon": "👨‍🏫",
          "requirements": [
            "Identificar la asignatura específica en la que requieres apoyo.",
            "Revisar dentro del documento si el profesor requiere que agendes cita escribiéndole previamente."
          ],
          "steps": [
            "Haz clic en el botón para abrir el documento oficial de \"Asesorías Permanentes\".",
            "Busca la materia y el profesor de tu elección en las diferentes tablas.",
            "Acude al salón indicado en el horario correspondiente o envía un correo si así se solicita."
          ],
          "actionType": "redirect",
          "actionText": "Consultar Asesorías",
          "actionUrl": "https://docs.google.com/document/d/1mv64dGS6_adyii5KGC4BfyqFwJUfFzm5/edit?usp=sharing"
        }
      },
      {
        "id": "AP2",
        "title": "Becas",
        "summary": "Información, listados y formatos para la Beca Universal Benito Juárez.",
        "detailedInfo": {
          "atomicId": "AP2",
          "icon": "💵",
          "requirements": [
            "Tu nombre debe aparecer en el listado oficial publicado.",
            "Llevar los formatos impresos en original y dos copias."
          ],
          "steps": [
            "Revisa el listado publicado en la página de Becas del plantel.",
            "Si apareces, consulta la sede y fecha específica asignada.",
            "Descarga los formatos, imprímelos y acude a la sede con tu documentación."
          ],
          "actionType": "redirect",
          "actionText": "Portal de Becas",
          "actionUrl": "http://prepa8.unam.mx/p8/alumnos/becas/benito_juarez"
        }
      },
      {
        "id": "AP3",
        "title": "Mediateca",
        "summary": "Centro de autoacceso para estudiar idiomas y tomar talleres culturales.",
        "detailedInfo": {
          "atomicId": "AP3",
          "icon": "🎧",
          "requirements": [
            "Ser alumno inscrito en el Plantel 8.",
            "Asistir con tu credencial vigente.",
            "Traer material de trabajo (cuaderno de bitácora, libro, etc.)."
          ],
          "steps": [
            "Acude de lunes a viernes entre 09:30 y 19:30 hrs.",
            "Visita la página web para explorar la oferta de Talleres (Conversación, Cultura, Gramática).",
            "Consulta los servicios de Multimedia y Préstamo de Materiales."
          ],
          "actionType": "redirect",
          "actionText": "Portal de la Mediateca",
          "actionUrl": "https://www.mediateca.prepa8.unam.mx/"
        }
      }
    ]
  },
  {
    "id": "documentos",
    "title": "Documentos",
    "identifierPrefix": "DO",
    "items": [
      {
        "id": "DO1",
        "title": "Constancia de Estudios",
        "summary": "Documento oficial para acreditar que eres estudiante vigente.",
        "detailedInfo": {
          "atomicId": "DO1",
          "icon": "📄",
          "requirements": [
            "Estar inscrito en el ciclo escolar actual.",
            "Presentarse con credencial vigente."
          ],
          "steps": [
            "Acude a ventanilla de Servicios Escolares en tu turno correspondiente.",
            "Solicita la constancia presentando tu credencial escolar.",
            "Este documento es útil para becas, pasaporte, IMSS e INE."
          ],
          "actionType": "none",
          "actionText": "Trámite presencial en ventanilla de Servicios Escolares"
        }
      },
      {
        "id": "DO2",
        "title": "Constancia Credencial del Plantel",
        "summary": "Identificación provisional en caso de extravío de tu credencial original.",
        "detailedInfo": {
          "atomicId": "DO2",
          "icon": "🪪",
          "requirements": [
            "Ser estudiante inscrito activo.",
            "Haber extraviado la credencial del plantel."
          ],
          "steps": [
            "Acude a ventanilla de Servicios Escolares en tu turno.",
            "Solicita la Constancia Credencial indicando el extravío.",
            "Fungirá como identificación válida para ingresar al plantel provisionalmente."
          ],
          "actionType": "none",
          "actionText": "Trámite presencial en ventanilla de Servicios Escolares"
        }
      },
      {
        "id": "DO3",
        "title": "Reposición Credencial de la UNAM",
        "summary": "Trámite para recuperar tu credencial universitaria por robo o extravío.",
        "detailedInfo": {
          "atomicId": "DO3",
          "icon": "💳",
          "requirements": [
            "Comprobante de pago (Rectoría).",
            "Acta de robo o extravío (Juez Cívico)."
          ],
          "steps": [
            "Realiza el pago por reposición en las cajas de Rectoría.",
            "Levanta el acta ante un juez cívico o fiscalía.",
            "Entrega ambos documentos en la ventanilla de Servicios Escolares.",
            "Recoge tu nueva credencial tras un día hábil."
          ],
          "actionType": "none",
          "actionText": "Trámite presencial en Rectoría (Pago) y Escolares (Entrega)"
        }
      },
      {
        "id": "DO4",
        "title": "Justificantes",
        "summary": "Trámites por inasistencia (menor a 10 días) o por periodos extendidos y condiciones médicas.",
        "detailedInfo": {
          "atomicId": "DO4",
          "icon": "📋",
          "requirements": [
            "Estar inscrito en el ciclo escolar actual.",
            "Contar con documentos probatorios legítimos (médicos o legales) según el caso."
          ],
          "steps": [
            "Inasistencia Menor (< 10 días): El alumno acude personalmente a ventanilla de Escolares para solicitar su justificante.",
            "Periodo Extendido o Aviso de Condición (> 10 días): Un familiar debe acudir a la Secretaría de Servicios Escolares para informar la situación.",
            "Notificación: La Secretaría enviará un aviso oficial a tus docentes por correo electrónico para asegurar el apoyo académico.",
            "Importante: La falsificación de documentos es causal de expulsión definitiva según el Estatuto General de la UNAM."
          ],
          "actionType": "none",
          "actionText": "Trámite presencial en Servicios Escolares"
        }
      }
    ]
  },
  {
    "id": "informacion",
    "title": "Información",
    "identifierPrefix": "IN",
    "items": [
      {
        "id": "IN1",
        "title": "Calendarios Escolares",
        "summary": "Fechas del ciclo escolar: clases, evaluaciones, extraordinarios y vacaciones.",
        "detailedInfo": {
          "atomicId": "IN1",
          "icon": "📅",
          "requirements": ["Ninguno (Consulta pública)."],
          "steps": [
            "Verifica las fechas del ciclo escolar vigente.",
            "Consulta periodos de registro y aplicación de exámenes.",
            "Descarga el documento para tenerlo como referencia."
          ],
          "actions": [
            {
              "type": "redirect",
              "text": "Ver en Google Drive",
              "url": "https://drive.google.com/file/d/1uq6qrWAOdm6v1OUngJ92Einff0og9JfM/view?usp=sharing"
            },
            {
              "type": "download",
              "text": "Descargar PDF",
              "url": "./assets/descargas/Calendario Anual_ENP_2025-2026.pdf"
            }
          ]
        }
      },
      {
        "id": "IN2",
        "title": "Horarios de Clase",
        "summary": "Consulta los horarios por grupo o profesor del plantel.",
        "detailedInfo": {
          "atomicId": "IN2",
          "icon": "⏰",
          "requirements": ["Conocer grupo o nombre del profesor."],
          "steps": [
            "Accede al portal de horarios de la ENP 8.",
            "Usa el buscador para filtrar por Grupo o por Profesor.",
            "Recuerda que los horarios pueden cambiar sin previo aviso."
          ],
          "actionType": "redirect",
          "actionText": "Consultar Horarios",
          "actionUrl": "http://prepa8.unam.mx/horarios/horarios.php"
        }
      },
      {
        "id": "IN3",
        "title": "Planes y Programas de Estudio",
        "summary": "Información sobre asignaturas y créditos de tu bachillerato.",
        "detailedInfo": {
          "atomicId": "IN3",
          "icon": "📚",
          "requirements": ["Ninguno (Consulta pública)."],
          "steps": [
            "Entra al portal oficial de Planes de la ENP.",
            "Selecciona el año (4to, 5to o 6to) que deseas consultar.",
            "Revisa programas, diagnósticos y bibliografía sugerida."
          ],
          "actionType": "redirect",
          "actionText": "Ver Planes de Estudio",
          "actionUrl": "http://enp.unam.mx/acercade/#planes"
        }
      },
      {
        "id": "IN4",
        "title": "Seriación de Bachillerato",
        "summary": "Diagramas de seriación de asignaturas y secuencias de idiomas.",
        "detailedInfo": {
          "atomicId": "IN4",
          "icon": "🔗",
          "requirements": ["Conocer tus materias actuales."],
          "steps": [
            "Consulta los requisitos previos obligatorios de cada materia.",
            "Revisa la secuencia de idiomas según el nivel inicial.",
            "Descarga los diagramas PDF para tu seguimiento."
          ],
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
        "id": "IN5",
        "title": "Lineamientos de Acceso al Plantel",
        "summary": "Protocolos de ingreso, uso de credencial y reglas de convivencia.",
        "detailedInfo": {
          "atomicId": "IN5",
          "icon": "🏫",
          "requirements": ["Contar con credencial vigente."],
          "steps": [
            "El acceso es de 06:45 a 20:45 hrs, lunes a viernes.",
            "Es obligatorio mostrar credencial vigente para ingresar.",
            "Evita introducir objetos prohibidos (mascotas, pelotas, etc.).",
            "Registros por olvido de credencial están limitados por ciclo escolar."
          ],
          "actionType": "redirect",
          "actionText": "Ver Lineamientos",
          "actionUrl": "https://drive.google.com/file/d/1Dlh9PkX2hD0f1XQiuxs3q177pDq1prY4/view"
        }
      }
    ]
  },
  {
    "id": "servicios-digitales",
    "title": "Servicios Digitales",
    "identifierPrefix": "SD",
    "items": [
      {
        "id": "SD1",
        "title": "Correo Institucional",
        "summary": "Gestión y recuperación de tu cuenta @alumno.enp.unam.mx",
        "detailedInfo": {
          "atomicId": "SD1",
          "icon": "📧",
          "requirements": ["Número de cuenta de 9 dígitos."],
          "steps": [
            "Ingresa tus 9 dígitos (el dominio se añade automáticamente).",
            "La contraseña inicial es tu fecha de nacimiento (DDMMAAAA).",
            "Para recuperación, acude a ventanillas de Servicios Escolares."
          ],
          "actionType": "redirect",
          "actionText": "Ir al Correo",
          "actionUrl": "https://mail.google.com/a/alumno.enp.unam.mx"
        }
      },
      {
        "id": "SD2",
        "title": "Catálogo Bibliotecario",
        "summary": "Búsqueda de libros en la Biblioteca Pous Ortíz y red UNAM.",
        "detailedInfo": {
          "atomicId": "SD2",
          "icon": "📖",
          "requirements": ["Ninguno (Consulta pública)."],
          "steps": [
            "Localiza colecciones físicas en el plantel.",
            "Accede a e-books y bases de datos digitales de la UNAM.",
            "Consulta el reglamento para préstamos a domicilio."
          ],
          "actionType": "redirect",
          "actionText": "Ver Catálogo",
          "actionUrl": "https://enp8.bibliotecas.unam.mx/"
        }
      },
      {
        "id": "SD3",
        "title": "Descargas",
        "summary": "Contenidos de profesores, software libre y logotipos oficiales.",
        "detailedInfo": {
          "atomicId": "SD3",
          "icon": "⬇️",
          "requirements": ["Conocer el nombre del profesor (si aplica)."],
          "steps": [
            "Busca materiales educativos subidos por tus docentes.",
            "Descarga software de seguridad y educativo oficial.",
            "Obtén logotipos institucionales para tus trabajos."
          ],
          "actionType": "redirect",
          "actionText": "Ir a Descargas",
          "actionUrl": "http://prepa8.unam.mx/p8/descargas"
        }
      },
      {
        "id": "SD4",
        "title": "Red Universitaria de Aprendizaje (RUA)",
        "summary": "Recursos educativos libres asociados a tus asignaturas.",
        "detailedInfo": {
          "atomicId": "SD4",
          "icon": "🌐",
          "requirements": ["Ninguno."],
          "steps": [
            "Filtra materiales por asignatura y nivel del bachillerato.",
            "Explora recursos evaluados académicamente por la UNAM.",
            "Usa herramientas interactivas para facilitar tu aprendizaje."
          ],
          "actionType": "redirect",
          "actionText": "Ir a la RUA",
          "actionUrl": "https://www.rua.unam.mx/"
        }
      },
      {
        "id": "SD5",
        "title": "Red Inalámbrica Universitaria (RIU)",
        "summary": "Conexión gratuita Wi-Fi en instalaciones de la UNAM.",
        "detailedInfo": {
          "atomicId": "SD5",
          "icon": "📶",
          "requirements": [
            "Ser estudiante activo.",
            "Contar con correo @alumno.enp.unam.mx o @comunidad.unam.mx."
          ],
          "steps": [
            "Solicita tu cuenta en el portal de Servicio RIU.",
            "Sigue la guía de configuración para tu dispositivo específico.",
            "Conéctate en las zonas de cobertura dentro del plantel."
          ],
          "actions": [
            {
              "type": "redirect",
              "text": "Alta o Recuperación",
              "url": "https://www.servicioriu.unam.mx/"
            },
            {
              "type": "redirect",
              "text": "Guía de Conexión",
              "url": "https://www.riu.unam.mx/conecte-su-equipo/"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "tramites",
    "title": "Trámites",
    "identifierPrefix": "TR",
    "items": [
      {
        "id": "TR1",
        "title": "Suspensión Temporal de Estudios",
        "summary": "Procedimiento para suspender estudios por un ciclo escolar.",
        "detailedInfo": {
          "atomicId": "TR1",
          "icon": "🛑",
          "requirements": [
            "Solicitud firmada (DDMMAAAA)",
            "Identificación del padre/tutor e INE del alumno.",
            "Carta de exposición de motivos y documentos probatorios."
          ],
          "steps": [
            "Reúne todos los documentos médicos o legales originales.",
            "Entrega tu expediente en ventanilla de Escolares en tu turno.",
            "La resolución demora aproximadamente 30 días hábiles."
          ],
          "actionType": "redirect",
          "actionText": "Descargar Guía",
          "actionUrl": "https://drive.google.com/file/d/1svf7HO3Xwv_CWbWFt2JIYGv2-Q8M2bHG/view"
        }
      },
      {
        "id": "TR2",
        "title": "Solicitud de Certificado de Bachillerato",
        "summary": "Requisitos para tramitar tu certificado al concluir estudios.",
        "detailedInfo": {
          "atomicId": "TR2",
          "icon": "🎓",
          "requirements": [
            "Ficha de pago SIGEREL.",
            "2 fotografías tamaño credencial ovaladas.",
            "Credencial de alumno vigente."
          ],
          "steps": [
            "Genera tu ficha de pago en SIGEREL con tu NIP del SIAE.",
            "Acude a la URE (Adolfo Prieto 722) para entregar documentos.",
            "TRAMITEL: Servicio disponible para foráneos vía correo."
          ],
          "actionType": "download",
          "actionText": "Bajar Formato PDF",
          "actionUrl": "assets/descargas/SOLICITUD DE CERTIFICADO_2025.pdf"
        }
      },
      {
        "id": "TR3",
        "title": "Registro de Exámenes Extraordinarios",
        "summary": "Inscripción de materias en periodos de exámenes extraordinarios.",
        "detailedInfo": {
          "atomicId": "TR3",
          "icon": "📆",
          "requirements": ["Revisar fechas vigentes en el calendario."],
          "steps": [
            "Consulta el Calendario Anual para ver los periodos de registro.",
            "Si está abierto, ingresa al portal SIEEL para inscribir.",
            "Guarda tu comprobante de registro impreso."
          ],
          "actions": [
            {
              "type": "redirect",
              "text": "1. Ver Fechas Oficiales",
              "url": "https://drive.google.com/file/d/1uq6qrWAOdm6v1OUngJ92Einff0og9JfM/view"
            },
            {
              "type": "redirect",
              "text": "2. Registro en SIEEL",
              "url": "https://sieel.enp.unam.mx/"
            }
          ]
        }
      },
      {
        "id": "TR4",
        "title": "Alta/Baja del Seguro IMSS Estudiantil",
        "summary": "Trámites de vigencia de salud para estudiantes de la UNAM.",
        "detailedInfo": {
          "atomicId": "TR4",
          "icon": "🏥",
          "requirements": [
            "CURP, Acta de Nacimiento y Hoja de Vigencia del IMSS.",
            "Solicitud elaborada a mano por estudiante/tutor."
          ],
          "steps": [
            "ALTA: Envía tus documentos a escolares.p8@enp.unam.mx.",
            "BAJA: Entrega tus documentos físicamente en ventanilla.",
            "Verifica siempre tu estatus en el portal digital del IMSS."
          ],
          "actions": [
            {
              "type": "redirect",
              "text": "Ver Vigencia IMSS",
              "url": "https://serviciosdigitales.imss.gob.mx/gestionAsegurados-web-externo/vigencia/"
            },
            {
              "type": "redirect",
              "text": "Bajar Formato Baja",
              "url": "https://drive.google.com/file/d/1xixmz7hNKKJoP0gVfWWEjYc4sxDdLbnN/view"
            }
          ]
        }
      },
      {
        "id": "TR5",
        "title": "Selección de Actividades Estéticas",
        "summary": "Registro obligatorio para talleres artísticos y culturales (Estéticas).",
        "detailedInfo": {
          "atomicId": "TR5",
          "icon": "🎭",
          "requirements": [
            "Obligatorio para egresar (cursar en 4to y 5to año).",
            "Inscripción al inicio del ciclo escolar."
          ],
          "steps": [
            "Revisa la oferta de disciplinas (Danza, Música, etc.) y salones.",
            "Realiza tu registro en el sistema en las fechas indicadas.",
            "Es indispensable presentarse físicamente con el profesor."
          ],
          "actionType": "redirect",
          "actionText": "Sistema Estéticas",
          "actionUrl": "http://sistemasp8.enp.unam.mx/esteticas/"
        }
      },
      {
        "id": "TR6",
        "title": "Pase Reglamentado",
        "summary": "Procedimiento de ingreso a Licenciatura para egresados de la ENP.",
        "detailedInfo": {
          "atomicId": "TR6",
          "icon": "📝",
          "requirements": [
            "Promedio y tiempo curricular establecido.",
            "Publicación de convocatoria (marzo)."
          ],
          "steps": [
            "Registra tu solicitud en el portal de la DGAE (abril).",
            "Realiza tus exámenes de diagnóstico y captura de datos.",
            "Consulta tus resultados de asignación en julio."
          ],
          "actionType": "redirect",
          "actionText": "Info del Pase",
          "url": "https://drive.google.com/file/d/1WjBv4Ry92h6wP9e-gl3gZNzOzSxcYzVe/view"
        }
      },
      {
        "id": "TR7",
        "title": "Validación de Certificado de Bachillerato",
        "summary": "Certificación de autenticidad de tu documento original.",
        "detailedInfo": {
          "atomicId": "TR7",
          "icon": "✅",
          "requirements": ["Documento original y copia.", "Pago de derechos.", "INE vigente."],
          "steps": [
            "Acude a la Dirección de Certificación en CU.",
            "El trámite demora de 2 a 5 días hábiles.",
            "Convenios: Posibilidad de envío vía email para instituciones."
          ],
          "actionType": "redirect",
          "actionText": "Trámites DGAE",
          "actionUrl": "https://www.dgae.unam.mx/tramites/index.html"
        }
      },
      {
        "id": "TR8",
        "title": "Recuperación de NIP de página DGAE",
        "summary": "Recuperación de clave de acceso a servicios escolares UNAM.",
        "detailedInfo": {
          "atomicId": "TR8",
          "icon": "🔑",
          "requirements": ["Identificación oficial o credencial vigente."],
          "steps": [
            "Acude de forma presencial a la Jefatura de Servicios Escolares.",
            "Solicita tu NIP dentro del horario de tu turno escolar."
          ],
          "actionType": "none",
          "actionText": "Trámite presencial en Jefatura de Escolares"
        }
      },
      {
        "id": "TR9",
        "title": "Apostilla de Documentos",
        "summary": "Certificación de validez para documentos académicos nacionales e internacionales.",
        "detailedInfo": {
          "atomicId": "TR9",
          "icon": "🌎",
          "requirements": [
            "Documentos originales con firmas autógrafas.",
            "Trámites internacionales: legalización previa en país emisor."
          ],
          "steps": [
            "Apostilla Nacional: Paga derechos y acude a Río Amazonas 62 (vía Segob).",
            "Autenticación Previa: Antes de apostillar planes, autentícalos en CU.",
            "Apostilla Internacional: Hazlo en el país originario antes de volver a México."
          ],
          "actions": [
            {
              "type": "redirect",
              "text": "Guía Apostilla Nacional",
              "url": "https://drive.google.com/file/d/1dyLSgWamt5ujTN5NxTH9LzjeF-qaSYi_/view"
            },
            {
              "type": "redirect",
              "text": "Guía Apostilla Internacional",
              "url": "https://drive.google.com/file/d/1at-DtClfE5kcfEwWo2R4kl8ehqEsLhDU/view"
            }
          ]
        }
      }
    ]
  }
];
