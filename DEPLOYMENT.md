# Guía de Deployment - VDCM

## Build de Producción

```bash
npm install
npm run build
```

Genera carpeta `dist/` con la aplicación optimizada lista para producción.

## Deployment en Vercel (Recomendado)

### Opción 1: GitHub + Vercel (Automático)

1. Push tu código a GitHub
2. Conecta tu repositorio en [vercel.com](https://vercel.com)
3. Vercel detecta Vite automáticamente
4. Deployment automático en cada push

**Tiempo de deployment:** Menos de 1 minuto

### Opción 2: Vercel CLI

```bash
npm install -g vercel
vercel
```

Sigue las instrucciones interactivas.

## Deployment en Netlify

### Con GitHub

1. Push a GitHub
2. Conecta repositorio en [netlify.com](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`

### Con Netlify CLI

```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

## Deployment en AWS Amplify

```bash
npm install -g @aws-amplify/cli
amplify init
amplify publish
```

## Deployment en Firebase Hosting

```bash
npm install -g firebase-tools
firebase init hosting
firebase deploy
```

Configurar `firebase.json`:
```json
{
  "hosting": {
    "public": "dist",
    "ignore": ["firebase.json", "**/.*"],
    "rewrites": [{
      "source": "**",
      "destination": "/index.html"
    }]
  }
}
```

## Deployment en tu propio servidor

### Ubuntu/Linux

```bash
# Construir
npm run build

# Copiar a servidor web
scp -r dist/* usuario@tuservidor:/var/www/vdcm/

# Con nginx (configurar reverse proxy)
location / {
  try_files $uri $uri/ /index.html;
}
```

### Docker

```dockerfile
FROM node:18 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

Construir y ejecutar:
```bash
docker build -t vdcm .
docker run -p 80:80 vdcm
```

## Configuración de Dominio Personalizado

### En Vercel
1. Settings > Domains
2. Agregar tu dominio
3. Actualizar DNS registrar

### En Netlify
1. Domain management > Add custom domain
2. Actualizar nameservers

### En tu servidor
1. Apuntar DNS a tu IP
2. Configurar SSL con Let's Encrypt

```bash
sudo certbot certonly --standalone -d tudominio.com
```

## Monitoreo y Análisis

### Agregar Google Analytics

En `index.html` antes de `</head>`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### Monitoreo de Performance

Vercel proporciona automáticamente:
- Core Web Vitals
- Lighthouse scores
- Analytics en tiempo real

## Variables de Entorno

Crear `.env` (no incluir en git):
```
VITE_API_BASE_URL=https://api.example.com
VITE_ANALYTICS_ID=ua-xxxxx
```

Usar en código:
```typescript
const apiUrl = import.meta.env.VITE_API_BASE_URL;
```

## Checklist Pre-Deployment

- [ ] Verificar todos los enlaces funcionen
- [ ] Probar en móvil
- [ ] Verificar imágenes cargan correctamente
- [ ] Comprobar formularios funcionan
- [ ] SEO meta tags configurados
- [ ] Robots.txt y sitemap.xml listos
- [ ] HTTPS habilitado
- [ ] Analytics configurado
- [ ] Contactos de ayuda funcionales
- [ ] Performance optimizado (Lighthouse > 90)

## Performance

### Tamaño Final

- HTML: ~1.2 KB
- CSS (combinado): ~45 KB
- JavaScript (minificado): ~150 KB
- Total (gzipped): ~50 KB

### Tiempos de Carga

- First Contentful Paint: < 1s
- Largest Contentful Paint: < 2s
- Cumulative Layout Shift: < 0.1

### Optimizaciones Realizadas

- CSS minificado
- Tree-shaking de dependencias
- Code splitting automático
- Lazy loading de componentes
- Compresión gzip

## Mantenimiento

### Actualizar Datos

1. Editar `src/data/dataStore.ts`
2. Verificar cambios localmente: `npm run dev`
3. Commit y push
4. Deployment automático

### Logs

**Vercel Dashboard**: Acceso a build logs y errores en tiempo real

**Netlify Dashboard**: Analytics y logs de deployment

## Rollback

Si algo falla:

**Vercel**: `vercel rollback` (último deployment)

**Netlify**: Ir a Deploys > seleccionar versión anterior > Publish

## Estadísticas Esperadas

### Tráfico Global
- Sin límite de usuarios concurrentes
- CDN global automático
- Caché inteligente

### Disponibilidad
- Uptime > 99.95%
- Backups automáticos
- Auto-scaling

## Costo

### Opciones Gratuitas
- **Vercel**: Perfecto para este proyecto
- **Netlify**: Anche perfecto
- **Firebase**: 10GB almacenamiento gratis
- **AWS Amplify**: 15 minutos build/mes gratis

### Con Alta Escala
- **Vercel**: $20/mes para features avanzadas
- **Netlify**: $19/mes con analytics
- **AWS Amplify**: Escalable, pay-as-you-go

---

**Recomendación:** Usar Vercel o Netlify. Ofrecen:
- Setup instantáneo desde GitHub
- Deployment automático
- SSL gratuito
- CDN global
- Planes gratuitos generosos
