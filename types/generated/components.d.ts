import type { Schema, Struct } from '@strapi/strapi';

export interface SectionsBambooStatement extends Struct.ComponentSchema {
  collectionName: 'components_sections_bamboo_statements';
  info: {
    displayName: 'bamboo-statement';
  };
  attributes: {
    description: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsComoTrabajamos extends Struct.ComponentSchema {
  collectionName: 'components_sections_como_trabajamos';
  info: {
    displayName: 'como-trabajamos';
  };
  attributes: {
    eyebrow: Schema.Attribute.String;
    items: Schema.Attribute.Component<'sections.paso', true>;
  };
}

export interface SectionsEquipo extends Struct.ComponentSchema {
  collectionName: 'components_sections_equipos';
  info: {
    displayName: 'equipo';
  };
  attributes: {
    eyebrow: Schema.Attribute.String;
    miembros: Schema.Attribute.Component<'sections.miembro', true>;
  };
}

export interface SectionsHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    ctaLabel: Schema.Attribute.String;
    ctaUrl: Schema.Attribute.String;
    headlineDefault: Schema.Attribute.String;
    headlineHighlight: Schema.Attribute.String;
    subheadline: Schema.Attribute.String;
  };
}

export interface SectionsMiembro extends Struct.ComponentSchema {
  collectionName: 'components_sections_miembros';
  info: {
    displayName: 'miembro';
  };
  attributes: {
    bio: Schema.Attribute.Text;
    foto: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    nombre: Schema.Attribute.String;
    rol: Schema.Attribute.String;
  };
}

export interface SectionsPaso extends Struct.ComponentSchema {
  collectionName: 'components_sections_pasos';
  info: {
    displayName: 'como-trabajamos-item';
  };
  attributes: {
    descripcion: Schema.Attribute.Text;
    titulo: Schema.Attribute.String;
  };
}

export interface SectionsProposito extends Struct.ComponentSchema {
  collectionName: 'components_sections_propositos';
  info: {
    displayName: 'proposito';
  };
  attributes: {
    eyebrow: Schema.Attribute.String;
    items: Schema.Attribute.Component<'sections.proposito-item', true>;
  };
}

export interface SectionsPropositoItem extends Struct.ComponentSchema {
  collectionName: 'components_sections_proposito_items';
  info: {
    displayName: 'proposito-item';
  };
  attributes: {
    texto: Schema.Attribute.Text;
    tipo: Schema.Attribute.String;
    titulo: Schema.Attribute.String;
  };
}

export interface SectionsQuienesSomos extends Struct.ComponentSchema {
  collectionName: 'components_sections_quienes_somos';
  info: {
    displayName: 'quienes-somos';
  };
  attributes: {
    bodyDefault: Schema.Attribute.String;
    bodyHighlight: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsSolucionItem extends Struct.ComponentSchema {
  collectionName: 'components_sections_solucion_items';
  info: {
    displayName: 'solucion-item';
  };
  attributes: {
    descripcion: Schema.Attribute.Text;
    titulo: Schema.Attribute.String;
  };
}

export interface SectionsSoluciones extends Struct.ComponentSchema {
  collectionName: 'components_sections_soluciones';
  info: {
    displayName: 'soluciones';
  };
  attributes: {
    descripcion: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    items: Schema.Attribute.Component<'sections.solucion-item', true>;
    titulo: Schema.Attribute.String;
  };
}

export interface SectionsTestimonialItem extends Struct.ComponentSchema {
  collectionName: 'components_sections_testimonial_items';
  info: {
    displayName: 'testimonial-item';
  };
  attributes: {
    avatar: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    cita: Schema.Attribute.Text;
    company: Schema.Attribute.String;
    companyDescription: Schema.Attribute.String;
    contenido: Schema.Attribute.Text;
  };
}

export interface SectionsTestimonios extends Struct.ComponentSchema {
  collectionName: 'components_sections_testimonios';
  info: {
    displayName: 'testimonios';
  };
  attributes: {
    eyebrow: Schema.Attribute.String;
    items: Schema.Attribute.Component<'sections.testimonial-item', true>;
  };
}

export interface SharedFooter extends Struct.ComponentSchema {
  collectionName: 'components_shared_footers';
  info: {
    displayName: 'footer';
  };
  attributes: {
    brandTagline: Schema.Attribute.Text;
    contactEmail: Schema.Attribute.Email;
    contactPhone: Schema.Attribute.String;
    copyright: Schema.Attribute.String;
    legalInfo: Schema.Attribute.Text;
    officeAddress: Schema.Attribute.Text;
  };
}

export interface SharedNavLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_nav_links';
  info: {
    displayName: 'nav-link';
  };
  attributes: {
    href: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean;
    label: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    metaDescription: Schema.Attribute.String;
    metaTitle: Schema.Attribute.String;
    ogImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'sections.bamboo-statement': SectionsBambooStatement;
      'sections.como-trabajamos': SectionsComoTrabajamos;
      'sections.equipo': SectionsEquipo;
      'sections.hero': SectionsHero;
      'sections.miembro': SectionsMiembro;
      'sections.paso': SectionsPaso;
      'sections.proposito': SectionsProposito;
      'sections.proposito-item': SectionsPropositoItem;
      'sections.quienes-somos': SectionsQuienesSomos;
      'sections.solucion-item': SectionsSolucionItem;
      'sections.soluciones': SectionsSoluciones;
      'sections.testimonial-item': SectionsTestimonialItem;
      'sections.testimonios': SectionsTestimonios;
      'shared.footer': SharedFooter;
      'shared.nav-link': SharedNavLink;
      'shared.seo': SharedSeo;
    }
  }
}
