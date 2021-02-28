export const formatDesc = (desc, limit) => {
    return (desc.length > limit) ? desc.slice(0, limit - 1).concat('...') : desc;
}