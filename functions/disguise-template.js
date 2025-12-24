/**
 * 伪装模板显示端点
 * @author MiSub Team
 */

import { getTemplate } from './modules/disguise-templates.js';

/**
 * 显示内置伪装模板
 * @param {Object} context - Cloudflare上下文对象
 * @returns {Promise<Response>} HTTP响应
 */
export async function onRequest(context) {
    const { request } = context;
    const url = new URL(request.url);
    const templateType = url.searchParams.get('type') || 'search';

    const template = getTemplate(templateType);

    return new Response(template, {
        headers: {
            'Content-Type': 'text/html; charset=utf-8',
            'Cache-Control': 'no-cache'
        }
    });
}
