export interface Testimonial {
    id: number
    content?: string
    customerName: string
    location: string
}

export const testimonials: Testimonial[] = [
    {
        id: 1,
        content:
            "I wore this on my wedding day and now every time I spray it, I'm right back in that moment. It's not just perfume, it's pure nostalgia.",
        customerName: 'Megha Rao',
        location: 'Delhi',
    },
    {
        id: 2,
        content:
            "I wore this on my wedding day and now every time I spray it, I'm right back in that moment. It's not just perfume, it's pure nostalgia.",
        customerName: 'Priya Singh',
        location: 'Mumbai',
    },
    {
        id: 3,
        content:
            "I recently tried Summer Afternoon and it's very light, breezy scent that keeps me feeling fresh all day",
        customerName: 'Ayesha Khan',
        location: 'Chennai',
    },
    {
        id: 4,
        content:
            "I recently tried Summer Afternoon and it's very light, breezy scent that keeps me feeling fresh all day",
        customerName: 'Rahul Kapoor',
        location: 'Bangalore',
    },
]
