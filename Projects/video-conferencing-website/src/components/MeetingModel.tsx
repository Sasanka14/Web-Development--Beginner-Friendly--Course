import React, { ReactNode } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
  

interface MeetingModelProps{
    isOpen: boolean;
    onClose: () => void;
    title: string;
    className?: string;
    children?: ReactNode;
    handleClick?: () => void;
    buttonText?: string;
    image?: string;
    buttonIcon?: string;
}

const MeetingModel = ({isOpen, onClose, title, className, children, handleClick, buttonText, image, buttonIcon}: MeetingModelProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
    
    <DialogContent className='flex w-full max-w-[520px] flex-col gap-6 border-none bg-dark-1 px-6 py-9 text-white'>
        <DialogHeader className='flex flex-col gap-6'>
        {image && (
            <div className='flex justify-center'>
                <Image
                src={image}
                width={72}
                height={72}
                alt="image"
                />
            </div>
        )}
        </DialogHeader>
         <DialogTitle className={cn('text-3xl font-bold leading-[42px]', className)}>{title}</DialogTitle>
        {children}
        <Button className='bg-green-1 focus-visible:ring-0 focus-visible:ring-offset-0 rounded-full' onClick={handleClick}>
            {buttonIcon && <Image src={buttonIcon} width={13} height={13} alt="icon"/>}&nbsp;
            {buttonText ||"Schedule Meeting"}
        </Button>
    </DialogContent>
  </Dialog>
  
  )
}

export default MeetingModel