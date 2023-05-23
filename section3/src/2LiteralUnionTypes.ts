type Programmer = 'Programmer'
type HR = 'HR'

let bestProgrammer: Programmer = 'Programmer'

type PositionType = Programmer | HR

type Position =
    | 'Programmer'
    | 'HR'
    | 'CEO'

function getSalaryForPosition(position: Position): number | undefined {
    if (position === 'Programmer') {
        bestProgrammer = position
        return 100000
    }
    if (position === 'HR') {
        return 120000
    }
    console.warn(`We don't have a salary for ${position}`)
}